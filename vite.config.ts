import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    nitro({
      preset: "vercel",
      serveStatic: true,
      publicAssets: [{ dir: "dist/client", maxAge: 31536000 }],
    }),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": "/src",
    },
    dedupe: ["react", "react-dom"],
  },
});
