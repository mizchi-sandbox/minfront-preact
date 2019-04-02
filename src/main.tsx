import { h, render, Fragment } from 'preact';
import { useState, useCallback } from 'preact/hooks'

function Home() {
  const [counter, setCounter] = useState(0);
  const onClick = useCallback(() => setCounter(counter => counter + 1), []);
  return <Fragment>
    <h1>Hello Preact</h1>
    <div>
      <button onClick={onClick}>{counter}</button>
    </div>
  </Fragment>
}

const root = document.querySelector(".root") as HTMLDivElement;
render(<Home />, root);