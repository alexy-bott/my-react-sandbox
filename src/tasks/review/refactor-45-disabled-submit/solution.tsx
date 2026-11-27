import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [checked, setChecked] = useState(false);
  // Доступность определяется текущими значениями: отдельный state для кнопки не нужен.
  const disabled = !first || !second || !checked;

  return <>
    <h1>Disable button</h1>
    <input type="text" value={first} onChange={event => setFirst(event.target.value)} />
    <input type="text" value={second} onChange={event => setSecond(event.target.value)} />
    <input type="checkbox" checked={checked} onChange={event => setChecked(event.target.checked)} />
    <button disabled={disabled}>submit</button>
  </>;
}
