import {createSignal} from 'solid-js'
import {modelCheckbox} from '/lib/helper'

const [foods, setFoods] = createSignal(['milk', 'water'])

const App = () => (
  <div>
    <h1>I love: {JSON.stringify(foods())}</h1>
    <hr/>
    <label><input type="checkbox" use:modelCheckbox={[foods, setFoods, 'milk']}/> milk</label>
    <label><input type="checkbox" use:modelCheckbox={[foods, setFoods, 'bread']}/> bread</label>
    <label><input type="checkbox" use:modelCheckbox={[foods, setFoods, 'meat']}/> meat</label>
    <label><input type="checkbox" use:modelCheckbox={[foods, setFoods, 'water']}/> water</label>
  </div>
)

export default App