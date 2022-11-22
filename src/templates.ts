export const functionComponent = (
  name: string,
  cssExtension: string
): string => `import styles from '../assets/modules/${name}.module.${cssExtension}'

export default function ${name}() {
  return <>${name} Component</>  
}`;
