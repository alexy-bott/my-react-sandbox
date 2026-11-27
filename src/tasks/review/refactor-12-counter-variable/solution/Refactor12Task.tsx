import { useState } from 'react';

export default function Counter() {
  // В исходнике функция закрыта раньше времени, а return и JSX
  // синтаксически некорректны. Сначала восстанавливаем границы функции.
  // Локальная переменная не сохраняется между рендерами, а её изменение
  // само по себе не планирует обновление интерфейса.
  const [count, setCount] = useState(0);

  const changeCount = () => setCount(previous => previous + 1);

  return (
    <div>
      <div>Count = {count}</div>
      {/* Исходная надпись повреждена; здесь нейтральная подпись. */}
      <button onClick={changeCount}>Кнопка</button>
    </div>
  );
}

// После исправления счётчик увеличивается на каждом клике.
// useRef сохранил бы значение, но сам не инициировал бы рендер.
