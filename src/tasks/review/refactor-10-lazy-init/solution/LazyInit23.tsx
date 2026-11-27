import { useState } from 'react';

export default () => <div>Clicker</div>;

// Реализация вычисления отсутствует в исходном фрагменте.
// Для разбора предполагаем числовой вход и результат, поскольку
// состояние затем увеличивается. Это декларация, не реализация.
declare function heavyFunc(count: number): number;

export const LazyInit = ({ count: initialCount }: { count: number }) => {
  const [count, setCount] = useState(() => heavyFunc(initialCount));

  return (
    <>
      {count}
      <button onClick={() => setCount(previous => previous + 1)}>
        Increment
      </button>
    </>
  );
};

// Lazy initialization убирает повторное вычисление на обычных рендерах,
// но не делает исходное десятисекундное вычисление неблокирующим.
// Если это реальная нагрузка, сначала нужно уточнить её природу;
// возможен вынос в Web Worker или получение результата заранее.
// Без реализации heavyFunc проверить выполнение этого варианта нельзя.
