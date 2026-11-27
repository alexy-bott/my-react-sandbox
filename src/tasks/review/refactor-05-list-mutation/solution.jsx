import React, { useState } from "react";
const initList = () => {
  return Array.from({ length: 200 }, (_el, index) => ({
    value: Math.random(), label: `row ${index + 1}`
  }));
}
export default function App() {
  // Передаём функцию: повторный рендер не генерирует заново 200 случайных строк.
  const [list, setList] = useState(initList);
  const handleUpdate = () => {
    const value = Math.random();
    // Мутация первой строки сама по себе не вызывает рендер. Заменяем строку и массив.
    setList(previous => previous.map((row, index) => index === 0 ? { ...row, value } : row));
  };
  return <div><h1>List App</h1>
    <Button onClick={handleUpdate}>Update "row 1"</Button>
    {list.map(({ label, value }) => <Row key={label} label={label} value={value} />)}
  </div>;
}
function Button(props) {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
}
function Row(props) {
  const { label, value } = props;
  return <div style={{ marginTop: '8px' }}>
    <span style={{ marginRight: "20px" }}>{label}:</span><span>{value}</span>
  </div>;
}
