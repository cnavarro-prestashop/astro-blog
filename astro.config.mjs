import { defineConfig } from "astro/config";
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [vue(), svelte(), react()]

  // SSG
  //output: "static"

  // SSR
  //output: "server"

  // ISR
  //output: "hybrid"
});