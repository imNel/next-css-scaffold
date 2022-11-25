# next-css-scaffold

A simple (probably opinionated) tool to make creating new components easier.
Tested on macOS, Probably works on Linux too

## Options

These can be specified in your package.json, before or after the command name

```
options:
  CSS Preprocessors:
  --sass: Uses sass instead css
  --scss: Uses scss instead css

  --src: Adds files to src/ instead of root (autodetected if you already have a src/ folder)
  --const: Uses const instead of function for react components

```

## Examples

Simply specify the component name:

```
ncs [path/to/Component]
```

And along with an empty css file, you'll be left with this!

```typescript
import styles from "assets/modules/Component.module.css";

export default function Component() {
  return <>Component</>;
}
```

### Using in your project

Install as a dev dependency

```
npm install -D next-css-scaffold
```

Add as a script to your package.json

```json
"scripts": {
  "scaffold": "ncs --scss --const"
}
```

Enjoy :D

```
npm run scaffold MyComponent
```

### Using globally

Install globally

```
npm install -g next-css-scaffold
```

Enjoy :D

```
cd [your project]
ncs MyComponent
```

## Todo:

- NextJS Project detection/validation
- Make CLI look better
