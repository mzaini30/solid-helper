import {createSignal} from 'solid-js'
import {modelObject} from '/lib/helper'

const [data, setData] = createSignal({name: 'Zen'})

const App = () => (
  <div>
    <h1>Hello {data().name}</h1>
    <input type="text" use:modelObject={[data, setData, 'name']}/>
  </div>
)

export default App