# Solid Helper

Helper for SolidJS

## model

```jsx
import {createSignal} from 'solid-js'
import {model} from 'solid-helper'

const [name, setName] = createSignal('world')

const App = () => (
  <div>
    <h1>Hello {name()}</h1>
    <input type="text" use:model={[name, setName]}/>
  </div>
)

export default App
```

## modelObject

```jsx
import {createSignal} from 'solid-js'
import {model, modelObject} from '/lib/helper'

const [data, setData] = createSignal({name: 'Zen'})

const App = () => (
  <div>
    <h1>Hello {data().name}</h1>
    <input type="text" use:modelObject={[data, setData, 'name']}/>
  </div>
)

export default App
```