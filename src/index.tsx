import { render } from "solid-js/web";
import { createSignal, createContext, Accessor, useContext } from "solid-js";
import Counter from "./Counter";
import { CountContext } from "./Context";
import Counter2 from "./Counter2";
function DifferentFileContext() {
  return (
    <CountContext>
      <Counter />
    </CountContext>
  );
}

const CountContext2 =
  createContext<
    [Accessor<number>, (v: number | ((prev: number) => number)) => number]
  >();

export function useCount() {
  return useContext(CountContext2)!;
}

function SameFileContext() {
  const [count, setCount] = createSignal(0);

  return (
    <CountContext2.Provider value={[count, setCount]}>
      <Counter2 />
    </CountContext2.Provider>
  );
}

render(() => <SameFileContext />, document.body);
