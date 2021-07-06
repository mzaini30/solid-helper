import { createSignal, JSXElement } from "solid-js";
import { model } from "../lib/helper";

const App = (): JSXElement => {
  const [food, setFood] = createSignal({ name: "" });
  console.log(model); // ts will raise a warning `model is not define` is this line is removed

  return (
    <div>
      <h1>I love: {food().name}</h1>
      <label>
        Input
        <br />
        <input type="text" use:model={[food, setFood, "name"]} />
      </label>
    </div>
  );
};

export default App;
