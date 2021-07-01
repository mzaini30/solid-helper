import {createSignal, createMemo} from 'solid-js'

const [numbers, setNumbers] = createSignal([1, 2, 3, 4])
const addNumber = () => setNumbers([...numbers(), numbers().length + 1])
const sum = createMemo(() => numbers().reduce((t, n) => t + n, 0))

const App = () => {
  return (
    <div>
      <p>{numbers().join(' + ')} = {sum()}</p>

      <button onClick={addNumber}>
        Add a number
      </button>
    </div>
  )
} 

export default App

/*
<script>
  let numbers = [1, 2, 3, 4];

  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }

  $: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
  Add a number
</button>
*/