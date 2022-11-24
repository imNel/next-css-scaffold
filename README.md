# next-css-scaffold

A simple (probably VERY opinionated) tool to make creating new components easier.

## Project state
Definitely not ready to use yet, getting close though. 
Once subfolder and better args support, I'll probably publish something 
(I'll just have to assume you'll have nextjs and ur preprocessor installed for now)

## Example
Simply specify the component name:
```
ncs [path/to/Component]
```

And along with an empty css file, you'll be left with this!
```typescript
import styles from '../assets/modules/Component.module.css'

export default function Component() {
  return <>Component</>
}
```

## Todo (a lot):
- NextJS Project detection/validation
- Let components have subfolders
- better handling of arguments
- custom headers for scss files
- CI/CD for updating package in npm
- restrict name to react component naming conventions
- Use typescript paths instead of relative paths in generation
- remove js support (boohoo)
