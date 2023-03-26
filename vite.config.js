import solid from "solid-start/vite";
import solidStatic from "solid-start-static";
import { defineConfig } from "vite";
export default defineConfig({
  base: "/${repo}/",
  outdir: "dist",
  plugins: [
    solid({
      adapter: solidStatic()
    }),
  ],
});
