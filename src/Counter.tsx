import { useCount } from "./Context";

export default function Counter() {
  const [count, setCount] = useCount();
  const increment = () => setCount(count() + 1);
  return (
    <button type="button" onClick={increment} class="a">
      {count()}
    </button>
  );
}
