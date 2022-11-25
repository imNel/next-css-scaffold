import { src, cssPreprocessor } from "./options";

const srcPrefix = src ? "src/" : "";

export const functionComponent = (
  name: string
): string => `import styles from '${srcPrefix}assets/modules/${name}.module.${cssPreprocessor}'

export default function ${name}():JSX.Element {
  return <>${name} Component</>  
}`;

export const constComponent = (
  name: string
): string => `import styles from '${srcPrefix}assets/modules/${name}.module.${cssPreprocessor}'

const ${name} = ():JSX.Element => <>${name} Component</>

export default ${name}`;
