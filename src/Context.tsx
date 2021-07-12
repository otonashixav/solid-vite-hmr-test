import {
  createSignal,
  createContext,
  Accessor,
  JSX,
  useContext,
} from "solid-js";
const Context =
  createContext<
    [Accessor<number>, (v: number | ((prev: number) => number)) => number]
  >();

export function useCount() {
  return useContext(Context)!;
}

export function CountContext(props: { children: JSX.Element }) {
  const [count, setCount] = createSignal(0);

  return (
    <Context.Provider value={[count, setCount]}>
      {props.children}
    </Context.Provider>
  );
}
