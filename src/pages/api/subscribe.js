// Alert signup. Adds the address to the EmailOctopus list as "pending", which
// makes EmailOctopus send its double opt-in confirmation email (the list must
// have double opt-in switched on). The API key never reaches the browser.
//
// Two ways in, both from AlertForm.astro:
// - fetch with JSON { email, website }: answers JSON { result }.
// - a plain form post (JavaScript off or not loaded yet): redirects back to the
//   page it came from, to the matching message, e.g. /get-alerts/#alert-ok.
// result is one of "ok", "already", "invalid", "failed".
//
// EmailOctopus API v2: https://emailoctopus.com/api-documentation/v2
import { EMAILOCTOPUS_API_KEY, EMAILOCTOPUS_LIST_ID } from 'astro:env/server';

export const prerender = false;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function subscribe(rawEmail, website) {
  // Hidden "website" field: people never fill it, form-filling bots do. Treat
  // it as a success so the bot learns nothing, but add no one.
  if (website) return 'ok';

  const email = typeof rawEmail === 'string' ? rawEmail.trim() : '';
  if (!EMAIL.test(email) || email.length > 254) return 'invalid';

  if (!EMAILOCTOPUS_API_KEY || !EMAILOCTOPUS_LIST_ID) {
    console.error('subscribe: EMAILOCTOPUS_API_KEY or EMAILOCTOPUS_LIST_ID is not set');
    return 'failed';
  }

  let res;
  try {
    res = await fetch(
      `https://api.emailoctopus.com/lists/${encodeURIComponent(EMAILOCTOPUS_LIST_ID)}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${EMAILOCTOPUS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_address: email, status: 'pending' }),
      },
    );
  } catch (err) {
    console.error('subscribe: EmailOctopus unreachable', err);
    return 'failed';
  }

  if (res.status === 201) return 'ok';
  if (res.status === 409) return 'already';
  if (res.status === 422) return 'invalid';
  console.error('subscribe: EmailOctopus answered', res.status, await res.text().catch(() => ''));
  return 'failed';
}

const STATUS = { ok: 200, already: 409, invalid: 400, failed: 502 };

export async function POST({ request, url }) {
  const isJson = (request.headers.get('content-type') || '').includes('application/json');

  if (isJson) {
    let body;
    try {
      body = await request.json();
    } catch {
      body = null;
    }
    const result = body ? await subscribe(body.email, body.website) : 'invalid';
    return new Response(JSON.stringify({ result }), {
      status: STATUS[result],
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    form = null;
  }
  const result = form ? await subscribe(form.get('email'), form.get('website')) : 'invalid';

  // Back to the page the form was on, if it is on this site.
  let back = '/get-alerts/';
  try {
    const ref = new URL(request.headers.get('referer') || '');
    if (ref.origin === url.origin) back = ref.pathname;
  } catch {
    // no or invalid referer: keep the default
  }
  return new Response(null, {
    status: 303,
    headers: { Location: `${back}#alert-${result}`, 'Cache-Control': 'no-store' },
  });
}
