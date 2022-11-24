# next-css-scaffold

A simple (probably VERY opinionated) tool to make creating new components easier.

## Example
Simply specify the component name:
```
ncs [path/to/Component]
```

And along with an empty css file, you'll be left with this!
```typescript
import styles from 'assets/modules/Component.module.css'

export default function Component() {
  return <>Component</>
}
```

## Todo (a lot):
- NextJS Project detection/validation
- Make CLI look better
- CI/CD for updating package in npm
