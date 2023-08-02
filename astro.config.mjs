import { defineConfig } from 'astro/config';

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://astorinomattia.com',
  integrations: [
    // Compressor must be at the end of the array
    compressor({
      fileExtensions: [".css", ".js", ".html", ".xml", ".cjs", ".mjs", ".svg", ".txt", '.riv'],
    })
  ]
});
