import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.ARC_WEB_PORT ?? "3007";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "pnpm run preview",
    port: Number(PORT),
    reuseExistingServer: !process.env.CI,
  },
});
