// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://guileless-pika-d1a921.netlify.app/",
  integrations: [preact()]
});