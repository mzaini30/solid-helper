# Solid Helper

Helper for Solid JS

## Usage

### model

```jsx
import { createSignal } from "solid-js";
import { model } from "solid-helper";

const [name, setName] = createSignal("world");

const App = () => (
  <div>
    <h1>Hello {name()}</h1>
    <input type="text" use:model={[name, setName]} />
  </div>
);

export default App;
```

### modelObject

```jsx
import { createSignal } from "solid-js";
import { modelObject } from "solid-helper";

const [data, setData] = createSignal({ name: "Zen" });

const App = () => (
  <div>
    <h1>Hello {data().name}</h1>
    <input type="text" use:modelObject={[data, setData, "name"]} />
  </div>
);

export default App;
```

### ESLint workaround

To avoid ESLint warning, create a `global.d.ts` file or put this code on any of your script.

```ts
declare module "solid-js" {
  namespace JSX {
    interface Directives {
      model: [() => any, (v: any) => any, ...any];
    }
  }
}
```

## License

[MIT](./LICENSE)
