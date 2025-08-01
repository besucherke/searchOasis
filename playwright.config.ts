import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Run tests in headed mode by default
  },
});
