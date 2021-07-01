# Solid Helper

Helper for SolidJS

## model

```jsx
import {createSignal} from 'solid-js'
import {model} from 'solid-helper'

const [nama, setNama] = createSignal('world')

const App = () => (
  <div>
    <h1>Hello {nama()}</h1>
    <input type="text" use:model={[nama, setNama]}/>
  </div>
)

export default App
```