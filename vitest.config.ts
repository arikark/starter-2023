/* eslint-disable @typescript-eslint/no-unsafe-call */
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  test: {
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    environment: "happy-dom",
  },
})
