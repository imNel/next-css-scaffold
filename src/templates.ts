export const functionComponent = (
  name: string,
  cssExtension: string
): string => `import styles from './${name}.module.${cssExtension}'

export default function ${name}() {
  return <>${name} Component</>  
}`;
