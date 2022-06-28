import { defineConfig } from "vite";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA()],
  root: "src",
  // base: "/bfb",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      external: resolve(__dirname, "src"),
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
});
