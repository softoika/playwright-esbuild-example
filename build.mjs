import { build } from "esbuild";
import pkg from "./package.json" assert { type: "json" };

/** @type { import("esbuild").BuildOptions } */
const options = {
  entryPoints: ["index.ts"],
  platform: "node",
  target: "node14.21",
  bundle: true,
  minify: true,
  outfile: "main.js",
  external: ["*.png", "./loader"],
  define: {
    VERSION: JSON.stringify(pkg.version),
  },
};

build(options);
