#!/usr/bin/env node

// TODO
// auto @use variables.scss (auto sass @use support basically)
// support things other than scss
// things in the help file
// less support
// prefers using src/ - if a pages, assets, components (etc) file is found, use root otherwise use the better thing ;)

import { readFileSync, writeFileSync } from "fs";
import { functionComponent } from "./templates";

const args = process.argv.slice(2);
const cssExtension = "css";

const main = () => {
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

const help = `ncs [path/to/component] [options]

options:
  --sass: Uses sass instead css
  --scss: Uses scss instead css
  --less: Uses less instead css
  --const (-c): Uses const instead of function
  --js (-js): Uses JavaScript instead of TypeScript 
`;

function filesExist(): boolean {
  try {
    if (readFileSync(`${args[0]}.tsx`).toString()) return true;
  } catch {}
  try {
    if (readFileSync(`${args[0]}.module.${cssExtension}`).toString()) return true;
  } catch {}
  return false;
}

function scaffold() {
  if (filesExist()) {
    console.log("found files! please delete them to continue")
    return
  }
  writeFileSync(`${args[0]}.tsx`, functionComponent(args[0], cssExtension))
  writeFileSync(`${args[0]}.module.${cssExtension}`, functionComponent(args[0], ''))
}

main();
