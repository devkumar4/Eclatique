import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        // @ts-ignore
        withCredentials: true, // Use withCredentials instead of credentials
      },
    },
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
    minify: "esbuild",
    sourcemap: true,
  },
});
