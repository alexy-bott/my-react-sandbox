import { useState } from 'react';

const CountDisplay = ({ c }: { c: number }) => {
  // useState(props.c) использует prop лишь как начальное значение.
  // При изменении c локальное состояние остаётся прежним.
  // Независимого состояния здесь нет: отображаем актуальный prop.
  return <div>{c}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);

  // Функциональный setter в исходнике уже был корректен.
  const handleClick = () => setCount(previous => previous + 1);

  return (
    <div>
      <button onClick={handleClick}><span>⚛️</span> {count}</button>
      <CountDisplay c={count} />
    </div>
  );
};

export default App;

// Не нужен эффект для синхронизации prop и state: он добавил бы
// лишний рендер и промежуточное устаревшее значение.
// Не нужно добавлять memo: c меняется при каждом увеличении.
// Обе части интерфейса должны отображать одно и то же значение.
