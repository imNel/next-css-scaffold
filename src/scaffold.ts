import { readFileSync } from "fs";
import { outputFileSync } from "fs-extra";
import * as options from "./utils/options";
import { constComponent, functionComponent } from "./utils/templates";

const reactPrefix = "components/";
const cssPrefix = "assets/modules/";

// Scaffold helper functions
function filesExist(component: string): boolean {
  const srcPrefix = options.src ? "src/" : "";
  try {
    if (readFileSync(`${srcPrefix}${reactPrefix}${component}.tsx`).toString())
      return true;
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
const isCapitalised = (name: string): boolean => {
  const splitName = name.split("/");
  return /^[A-Z]/g.test(splitName[splitName.length - 1]);
};
const isSrcDir = (): string => (options.src ? "src/" : "");

export default function scaffold(component: string): void {
  if (!isCapitalised(component)) {
    console.log("React components must start with a capital letter");
    return;
  }
  if (filesExist(component)) {
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
  console.log(
    `Successfully saffolded component and ${options.cssPreprocessor} file`
  );
}
