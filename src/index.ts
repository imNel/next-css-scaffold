// TODO
// auto @use variables.scss (auto sass @use support basically)
// support things other than scss
// things in the help file
// less support

import { existsSync, readFileSync } from "fs";
import { outputFileSync } from 'fs-extra';
import * as options from "./options";
import { functionComponent } from "./templates";

const component = process.argv.slice(2,3)[0];

const main = ():void => {
  if (component) {
    switch (component) {
      case "help":
        console.log(help);
        break;
      default:
        scaffold();
        break;
    }
  } else {
    console.log(help);
  }
};

const help:string = `ncs [path/to/component] [options]

options:
  --sass: Uses sass instead css
  --scss: Uses scss instead css
  --less: Uses less instead css
  --const (-c): Uses const instead of function
  --js (-js): Uses JavaScript instead of TypeScript 
`;

const reactPrefix = 'components/'
const cssPrefix = 'assets/modules/'

// Scaffold helper functions
function filesExist(): boolean {
  try {
    if (readFileSync(`${reactPrefix}${component}.tsx`).toString()) return true;
  } catch {}
  try {
    if (readFileSync(`${cssPrefix}${component}.module.${options.cssPreprocessor}`).toString()) return true;
  } catch {}
  return false;
}
const isCapitalised = (name: string): boolean => /^[A-Z]/g.test(name);
const isSrcDir = (): string => existsSync('src') || options.src ? 'src/' : ''

// Probably wanna break this function up since its gonna keep growning
function scaffold():void {
  if (!isCapitalised(component)) {
    console.log("React components must start with a capital letter")
    return
  }
  if (filesExist()) {
    console.log("found files! please delete them to continue")
    return
  }
  outputFileSync(`${isSrcDir()}${reactPrefix}${component}.tsx`, functionComponent(component, options.cssPreprocessor))
  outputFileSync(`${isSrcDir()}${cssPrefix}${component}.module.${options.cssPreprocessor}`, '')
}

main();
