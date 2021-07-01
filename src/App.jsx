import {createSignal} from 'solid-js'
import {model} from '/lib/helper'

const [nama, setNama] = createSignal('world')

const App = () => (
  <div>
    <h1>Hello {nama()}</h1>
    <input type="text" use:model={[nama, setNama]}/>
  </div>
)

export default App