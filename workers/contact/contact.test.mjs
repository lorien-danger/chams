import test from 'node:test';
import assert from 'node:assert/strict';
import worker from './index.mjs';

const origin = 'https://www.chams.com.au';
const valid = { firstName: 'Alex', lastName: 'Example', email: 'visitor@example.com', enquiryType: 'General', message: 'A website enquiry.' };
const request = (data = valid, headers = {}) => new Request(`${origin}/api/contact`, {
  method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json', 'CF-Connecting-IP': '192.0.2.1', ...headers }, body: JSON.stringify(data)
});
function environment() {
  const sent = [];
  return { sent, EMAIL: { send: async (message) => { sent.push(message); return { messageId: 'test-id' }; } }, CONTACT_LIMITER: { limit: async () => ({ success: true }) } };
}

test('only the private binding controls the recipient; accepted delivery returns no private metadata', async () => {
  const env = environment();
  const response = await worker.fetch(request({ ...valid, to: 'injected@example.com', from: 'injected@example.com', bcc: 'injected@example.com' }), env);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(env.sent.length, 1);
  assert.equal(env.sent[0].to, undefined);
  assert.equal(env.sent[0].bcc, undefined);
  assert.equal(env.sent[0].from.email, 'office@chams.com.au');
  assert.equal(env.sent[0].replyTo, valid.email);
  assert.match(env.sent[0].text, /A website enquiry\./);
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
});

test('invalid input, header injection, honeypot and oversized bodies do not send', async () => {
  const env = environment();
  for (const data of [null, [], {}, { ...valid, firstName: '' }, { ...valid, email: 'visitor@example.com\r\nBcc: other@example.com' }, { ...valid, email: 'not-an-email' }, { ...valid, message: 'x'.repeat(4001) }, { ...valid, enquiryType: 'Injected' }, { ...valid, website: 'bot.example' }, { ...valid, message: {} }]) {
    assert.equal((await worker.fetch(request(data), env)).status, 400);
  }
  assert.equal((await worker.fetch(request({ ...valid, message: 'x'.repeat(17000) }), env)).status, 413);
  assert.equal((await worker.fetch(request(valid, { 'Content-Length': '17000' }), env)).status, 413);
  assert.equal(env.sent.length, 0);
});

test('only same-origin JSON POSTs reach the mail binding', async () => {
  const env = environment();
  assert.equal((await worker.fetch(request(valid, { Origin: 'https://other.example' }), env)).status, 403);
  assert.equal((await worker.fetch(request(valid, { 'Content-Type': 'text/plain' }), env)).status, 415);
  assert.equal((await worker.fetch(new Request(`${origin}/api/contact`), env)).status, 405);
  assert.equal((await worker.fetch(new Request(`${origin}/api/contact-unrelated`), env)).status, 404);
  assert.equal(env.sent.length, 0);
});

test('rate limiting prevents a send and gives a retry interval', async () => {
  const env = environment();
  env.CONTACT_LIMITER.limit = async () => ({ success: false });
  const response = await worker.fetch(request(), env);
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Retry-After'), '60');
  assert.equal(env.sent.length, 0);
});

test('provider rejection and missing bindings never report success or leak details', async () => {
  const env = environment();
  env.EMAIL.send = async () => { throw new Error('Provider failure containing confidential-recipient@example.com'); };
  const response = await worker.fetch(request(), env);
  assert.equal(response.status, 503);
  const body = await response.text();
  assert.doesNotMatch(body, /confidential-recipient|Provider failure/);
  assert.equal(JSON.parse(body).ok, false);
  assert.equal((await worker.fetch(request(), {})).status, 503);
});

test('both apex protocols permanently redirect with paths and queries intact', async () => {
  for (const protocol of ['http', 'https']) {
    const response = await worker.fetch(new Request(`${protocol}://chams.com.au/community/?ref=a%20b&from=search`), {});
    assert.equal(response.status, 301);
    assert.equal(response.headers.get('Location'), `${origin}/community/?ref=a%20b&from=search`);
  }
});
