import { existsSync } from "fs";

const options = process.argv.slice(3);

/** User specified --src. Used to force scaffold to src folder */
export const src = existsSync("src") || options.includes("--src");

/** User specified a pre-processor, falls back to css.
 * Order of priority:
 * 1. scss
 * 2. sass
 * 3. css*/
export const cssPreprocessor: string = options.includes("--scss")
  ? "scss"
  : options.includes("--sass")
  ? "sass"
  : "css";

/** User specified --const. Uses const arrow function instead of normal function for react component */
export const useConst: boolean = options.includes("--const");
