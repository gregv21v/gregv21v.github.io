import solid from "solid-start/vite";
import solidStatic from "solid-start-static";
//import netlify from "solid-start-netlify";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    outDir: "dist"
  },
  plugins: [
    solid({
      adapter: solidStatic()
    }),
  ],
});