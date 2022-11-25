#! /usr/bin/env node

import { components } from "./utils/args";
import scaffold from "./scaffold";

const main = (): void => {
  if (components[0]) {
    scaffold(components[0]);
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
  --const: Uses const instead of function for react components
`;

main();
