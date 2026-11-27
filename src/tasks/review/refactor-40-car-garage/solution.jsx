import { useState } from "react";
function List({ items }) {
  return <ul>{items.map(item => <li key={item.label}>{item.label}</li>)}</ul>;
}
const listData = [{ label: "Mercedes" }];
const cars = ["Audi", "Toyota", "Lexus", "Volkswagen", "Porsche", "Nissan", "Hyundai", "KIA", "Chevrolet", "Ford", "Renault", "Mazda", "Suzuki"];
export default function App() {
  const [inventory, setInventory] = useState(cars);
  const [garage, setGarage] = useState(listData);
  // Одна покупка удаляет из салона и добавляет в гараж ту же модель.
  function buy() {
    const model = inventory[Math.floor(Math.random() * inventory.length)];
    setInventory(inventory.filter(car => car !== model));
    setGarage([...garage, { label: model }]);
  }
  return <div className="App">
    <span>По кнопке "покупать" случайную машину и помещать ее в гараж</span>
    <div>Автосалон: {inventory.join(", ")}</div>
    <button disabled={!inventory.length} onClick={buy}>Купить машину</button>
    <List items={garage} />
  </div>;
}
