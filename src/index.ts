#! /usr/bin/env node

import { readFileSync } from "fs";
import { outputFileSync } from "fs-extra";
import * as options from "./options";
import { constComponent, functionComponent } from "./templates";

const component = process.argv.slice(2, 3)[0];

const main = (): void => {
  if (component) {
    scaffold();
  } else {
    console.log(help);
  }
};

const help: string = `ncs [path/to/component] [options]

options:
  CSS Preprocessors:
  --sass: Uses sass instead css
  --scss: Uses scss instead css

  --src: Adds files to src/ instead of root (autodetected if you already have a src/ folder)
  --const: Uses const instead of function
`;

const reactPrefix = "components/";
const cssPrefix = "assets/modules/";

// Scaffold helper functions
function filesExist(): boolean {
  const srcPrefix = options.src ? "src/" : "";
  try {
    if (readFileSync(`${srcPrefix}${reactPrefix}${component}.tsx`).toString()) return true;
  } catch {}
  try {
    if (
      readFileSync(
        `${srcPrefix}${cssPrefix}${component}.module.${options.cssPreprocessor}`
      ).toString()
    )
      return true;
  } catch {}
  return false;
}
const isCapitalised = (name: string): boolean => /^[A-Z]/g.test(name);
const isSrcDir = (): string => (options.src ? "src/" : "");

// Probably wanna break this function up since its gonna keep growning
function scaffold(): void {
  if (!isCapitalised(component)) {
    console.log("React components must start with a capital letter");
    return;
  }
  if (filesExist()) {
    console.log("found files! please delete them to continue");
    return;
  }
  outputFileSync(
    `${isSrcDir()}${reactPrefix}${component}.tsx`,
    options.useConst ? constComponent(component) : functionComponent(component)
  );
  outputFileSync(
    `${isSrcDir()}${cssPrefix}${component}.module.${options.cssPreprocessor}`,
    ""
  );
}

main();
