const SITE_ORIGIN = 'https://www.chams.com.au';
const MAX_BODY_BYTES = 16384;
const TYPES = new Set(['General', 'Wholesale', 'Hospitality', 'Media / Press', 'Other']);

function result(status, error, extraHeaders = {}) {
  return Response.json(error ? { ok: false, error } : { ok: true }, {
    status,
    headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...extraHeaders }
  });
}

async function readBody(request) {
  if (Number(request.headers.get('Content-Length')) > MAX_BODY_BYTES) return null;
  if (!request.body) return '';
  const reader = request.body.getReader();
  const chunks = [];
  let length = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > MAX_BODY_BYTES) { await reader.cancel(); return null; }
    chunks.push(value);
  }
  const body = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return new TextDecoder().decode(body);
}

function field(data, name, max, required = false) {
  const value = data[name] ?? '';
  if (typeof value !== 'string' || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) return null;
  const clean = value.trim();
  return required && !clean ? null : clean;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Resolve the existing apex origin failure without touching its mail DNS or TLS mode.
    if (url.hostname === 'chams.com.au') {
      url.protocol = 'https:';
      url.hostname = 'www.chams.com.au';
      url.port = '';
      return Response.redirect(url.href, 301);
    }
    if (url.origin !== SITE_ORIGIN || !['/api/contact', '/api/contact/'].includes(url.pathname)) {
      return result(404, 'Not found.');
    }
    if (request.method !== 'POST') return result(405, 'Use the contact form.', { Allow: 'POST' });
    if (request.headers.get('Origin') !== SITE_ORIGIN) return result(403, 'Please submit from our contact page.');
    if (request.headers.get('Content-Type')?.split(';')[0].trim() !== 'application/json') {
      return result(415, 'Please submit from our contact page.');
    }
    try {
      if (!env.EMAIL || !env.CONTACT_LIMITER) return result(503, 'The form is temporarily unavailable. Please email office@chams.com.au.');
      // Anonymous form: a modest per-IP limit limits repeat submissions, including shared networks.
      const key = `chams-contact:${request.headers.get('CF-Connecting-IP') || 'unknown'}`;
      if (!(await env.CONTACT_LIMITER.limit({ key })).success) {
        return result(429, 'Please wait a minute before trying again.', { 'Retry-After': '60' });
      }
      const body = await readBody(request);
      if (body === null) return result(413, 'Your message is too long. Please shorten it and try again.');
      let data;
      try { data = JSON.parse(body); } catch { return result(400, 'Please check the form and try again.'); }
      if (!data || Array.isArray(data) || typeof data !== 'object') return result(400, 'Please check the form and try again.');
      if (data.website) return result(400, 'Please check the form and try again.');
      const firstName = field(data, 'firstName', 80, true);
      const lastName = field(data, 'lastName', 80);
      const business = field(data, 'business', 160);
      const email = field(data, 'email', 254, true);
      const phone = field(data, 'phone', 40);
      const enquiryType = field(data, 'enquiryType', 30, true);
      const message = field(data, 'message', 4000, true);
      if ([firstName, lastName, business, email, phone, enquiryType, message].includes(null)
        || !/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9.-]*[A-Z0-9])?\.[A-Z]{2,63}$/i.test(email)
        || !TYPES.has(enquiryType)) {
        return result(400, 'Please enter your first name, a valid email address and a message (up to 4,000 characters).');
      }
      // The destination lives only in Cloudflare's restricted EMAIL binding.
      // Never read a recipient from the request, echo provider errors, or log message content.
      await env.EMAIL.send({
        to: undefined,
        from: { email: 'office@chams.com.au', name: "Cham's Website" },
        replyTo: email,
        subject: `Cham's website enquiry — ${enquiryType}`,
        text: [
          `Name: ${firstName} ${lastName}`.trim(),
          `Business: ${business || '(not provided)'}`,
          `Email: ${email}`,
          `Phone: ${phone || '(not provided)'}`,
          `Enquiry: ${enquiryType}`,
          '', message,
          '', 'Submitted through https://www.chams.com.au/contact/'
        ].join('\n')
      });
      return result(200);
    } catch {
      return result(503, 'We could not confirm your message was sent. Please try again later or email office@chams.com.au.');
    }
  }
};
