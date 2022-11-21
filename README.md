# next-css-scaffold

A simple (probably VERY opinionated) tool to make creating new components easier.

## Example
Simply specify the component name:
```
ncs [path/to/Component]
```

And along with an empty css file, you'll be left with this!
```typescript
import styles from './Component.module.css'

export default function Component() {
  return <>Component</>
}
```

## Todo (a lot):
- Preprocessor support
- Project detection
- src vs no src dir detection
- custom headers for scss files
- restrict name to react component naming conventions
