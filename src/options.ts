const options = process.argv.slice(3);

/** User specified --src. Used to force scaffold to src folder */
export const src = options.includes("--src");

/** User specified a pre-processor, falls back to css.
 * Order of priority:
 * 1. scss
 * 2. sass
 * 3. less
 * 4. css*/
export const cssPreprocessor: string = options.includes("--scss")
  ? "scss"
  : options.includes("--sass")
  ? "sass"
  : options.includes("--less")
  ? "less"
  : "css";
