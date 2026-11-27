import { useState } from "react";

// defaultData — массив из исходного задания. Его содержимое и модуль не предоставлены.
export const Numbers = () => {
  const [data, setData] = useState(() => defaultData);
  const [value, setValue] = useState("");

  function addNumber() {
    const number = Number(value);
    if (!value.trim() || !Number.isFinite(number)) return;
    // length++ менял длину предыдущего массива и не гарантировал свободный id.
    setData(previous => {
      const id = previous.reduce((max, row) => Math.max(max, row.id), 0) + 1;
      return [...previous, { id, value: number }];
    });
    setValue("");
  }
  return <>
    <h2>Numbers</h2>
    <div className="list">{data.map(row => <div key={row.id}>number: {row.value}</div>)}</div>
    <div className="create">
      <label>Введите число:
        {/* Привязка value позволяет setValue("") очистить видимое поле. */}
        <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      </label>
      <button onClick={addNumber}>Создать</button>
    </div>
  </>;
};
