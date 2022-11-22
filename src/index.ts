// TODO
// auto @use variables.scss (auto sass @use support basically)
// support things other than scss
// things in the help file
// less support
// prefers using src/ - if a pages, assets, components (etc) file is found, use root otherwise use the better thing ;)

import { existsSync, readFileSync } from "fs";
import { outputFileSync } from 'fs-extra';
import { functionComponent } from "./templates";

const args = process.argv.slice(2);
const cssExtension = "css";

const main = ():void => {
  if (args[0]) {
    switch (args[0]) {
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
    if (readFileSync(`${reactPrefix}${args[0]}.tsx`).toString()) return true;
  } catch {}
  try {
    if (readFileSync(`${cssPrefix}${args[0]}.module.${cssExtension}`).toString()) return true;
  } catch {}
  return false;
}
const isCapitalised = (name: string): boolean => /^[A-Z]/g.test(name);
const isSrcDir = (): string => existsSync('src') ? 'src/' : ''

// Probably wanna break this function up since its gonna keep growning
function scaffold():void {
  if (!isCapitalised(args[0])) {
    console.log("React components must start with a capital letter")
    return
  }
  if (filesExist()) {
    console.log("found files! please delete them to continue")
    return
  }
  outputFileSync(`${isSrcDir()}${reactPrefix}${args[0]}.tsx`, functionComponent(args[0], cssExtension))
  outputFileSync(`${isSrcDir()}${cssPrefix}${args[0]}.module.${cssExtension}`, '')
}

main();
