import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const port = Number(process.env.ARC_WEB_PORT ?? 3007);

export default defineConfig({
  plugins: [react()],
  server: { port },
  preview: { port },
});
