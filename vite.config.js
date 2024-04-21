import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/camperRent/",
  plugins: [react()],
  server: {
    proxy: {
      "/adverts": {
        target: "https://66255aea052332d5531fdfb8.mockapi.io",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
