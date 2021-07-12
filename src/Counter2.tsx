import { useCount } from ".";

export default function Counter2() {
  const [count, setCount] = useCount();
  const increment = () => setCount(count() + 1);
  return (
    <button type="button" onClick={increment} class="a">
      {count()}
    </button>
  );
}
