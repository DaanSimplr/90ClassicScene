import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  devToolbar: { enabled: false },
  server: { port: 4321 },
  // Every page stays static. The adapter is only there so the one endpoint
  // with `prerender = false` (src/pages/api/subscribe.js) runs as a Vercel
  // function.
  adapter: vercel(),
  // Secrets for the alert signup, read only on the server. Locally they come
  // from .env; on Vercel from the project's Environment Variables. Optional so
  // the site still builds without them; the endpoint then answers with an error.
  env: {
    schema: {
      EMAILOCTOPUS_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      EMAILOCTOPUS_LIST_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
