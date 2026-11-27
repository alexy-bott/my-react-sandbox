import "./styles.css";
import { useState } from "react";
import Item from "./Item";
type SomeDTO = { id: number };
export default function App() {
  const [list, setList] = useState<SomeDTO[]>([{ id: 1 }, { id: 2 }]);
  // reverse меняет массив на месте. Копия даёт React новую ссылку.
  const handleReverseClick = () => { setList((old) => [...old].reverse()); };
  return (
    <div className="App">
      <h1>I have a bug, click on any item first and then reverse list</h1>
      {/* Ключ по id сохраняет связь между Item и записью при смене позиции. */}
      <ul>{list.map((item) => (<Item key={item.id} item={item} />))}</ul>
      <button onClick={handleReverseClick}>Click me to reverse a list</button>
    </div>
  );
}
