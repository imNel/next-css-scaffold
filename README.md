# next-css-scaffold

A simple (probably VERY opinionated) tool to make creating new components easier.

## Example
Simply specify the component name:
```
ncs [component]
```

And along with an empty css file, you'll be left with this!
```typescript
import styles from './component.module.css'

export default function component() {
  return <>component</>
}
```

## Todo (a lot):
- Preprocessor support
- Project detection
- src vs no src dir detection
- custom headers for scss files
