# Contact delivery and apex redirect

This standalone Worker handles `www.chams.com.au/api/contact*` and permanently redirects `chams.com.au/*` to HTTPS www with paths and queries intact. The existing Cloudflare Pages Worker continues serving the website and discovery endpoints.

The EMAIL binding is restricted to one verified private destination. The source and browser never need that address. It is configured separately from the two private Email Routing rules for `office@chams.com.au` and `trade@chams.com.au`.

## Deployment

1. Complete Cloudflare Email Routing DNS, verify the receiving destination, and configure the office/trade forwarding rules. Preserve unrelated TXT records.
2. Copy `wrangler.example.json` to a private temporary directory **outside the repository**. Set `main` to the absolute path of this directory's `index.mjs`. Replace the placeholder destination in that private file only, using the same verified destination as the routing rules. Include the relevant Cloudflare account ID there if the login has multiple accounts.
3. Run `node --test workers/contact/contact.test.mjs` and `wrangler deploy --dry-run --config /private/path/wrangler.json`.
4. Deploy with `wrangler deploy --config /private/path/wrangler.json`. Remove the temporary config afterwards. Do not commit it, include its values in deployment output, or publish it with the Pages assets.
5. Build and deploy the Pages site after the API works. Verify a real form submission is accepted and check inbox delivery separately. The destination cannot be chosen by a visitor. No acknowledgement is sent to the visitor.

Use Cloudflare's existing verified-destination lookup during deployment rather than copying a private address into reusable scripts. Suppress/redact CLI binding output because it can contain destination metadata. Keep the fixed-destination restriction on every redeployment; a placeholder is not a deployable production configuration.

The `CONTACT_LIMITER` binding is five requests per minute per anonymous client IP and Cloudflare location. Shared networks can hit this limit. The API also enforces JSON, same-origin requests, body/field limits and a honeypot. These reduce basic abuse, but are not a complete bot defence. Add Turnstile if needed.

## Privacy and operations

- Application code does not log submissions or return provider error details.
- Cloudflare and the destination mail provider necessarily process the messages; authorised account administrators can see the configuration.
- Successful HTTP responses mean email-service acceptance, not confirmed inbox delivery.
- Forwarding does not hide the sender identity of replies made from a personal mail account. Use a separately configured domain identity for outbound replies.
- The form only sends to the verified destination, keeping within Cloudflare's free destination-sending model. No arbitrary-recipient mail service is enabled by this Worker.

## Rollback

Remove only the `chams-contact` Worker routes to restore previous routing, or deploy the last known good Worker version. Removing the apex route restores the previous broken/parked origin, so retain it unless a replacement redirect is ready. Pages deployments and alias-forwarding rules are separate and should be rolled back independently only when necessary. Do not delete the account-wide destination or change other domains.

See [Cloudflare binding restrictions](https://developers.cloudflare.com/email-service/configuration/send-bindings/) and [verified-destination pricing](https://developers.cloudflare.com/email-service/platform/pricing/).
