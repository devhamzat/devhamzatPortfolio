import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "../myportfolio/src/icons";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),icon()]
});