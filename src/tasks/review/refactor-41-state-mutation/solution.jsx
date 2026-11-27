import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: "Anton" });

  function rename() {
    // Мутация поля не запрашивала рендер. Чужой рендер мог показать новое имя позже.
    setPerson(previous => ({ ...previous, name: "Alex" }));
  }

  function increment() {
    // Обработчик с пустыми зависимостями запомнил начальный 0 и всегда выставлял 1.
    setCount(previous => previous + 1);
  }

  return <div>
    <button onClick={increment}>{count}</button>
    <button onClick={rename}>{person.name}</button>
    <div /><input type="text" />
  </div>;
}
