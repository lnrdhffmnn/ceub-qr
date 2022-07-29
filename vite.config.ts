import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ceub-qr/",
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    includeAssets: ["assets/icons/*"],
    manifest: {
      name: "CEUB QR",
      display: "standalone",
      theme_color: "#262335",
      background_color: "#ffffff",
      icons: [
        {
          src: "assets/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "assets/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "assets/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        }
      ]
    }
  })]
});
