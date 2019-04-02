import { h, render } from 'preact';
import { useState, useCallback } from 'preact/hooks'

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = useCallback(() => setCounter(counter => counter + 1), []);
  return <div>
    <h1>Hello Preact</h1>
    <div>
      <button onClick={onClick}>{counter}</button>
    </div>
  </div>
}

const root = document.querySelector(".root") as HTMLDivElement;
render(<App />, root);