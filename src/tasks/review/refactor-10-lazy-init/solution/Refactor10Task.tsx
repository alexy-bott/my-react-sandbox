import { useState } from 'react';

const heavyFunc = (count: number) => Math.floor(Math.random() * count);

export const LazyInit = ({ count: initialCount }: { count: number }) => {
  // useState(heavyFunc(initialCount)) вычислял аргумент при каждом рендере,
  // хотя React использует начальное значение только при инициализации.
  // Передаём функцию-инициализатор, а не результат вычисления.
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

// ++prevProps тоже возвращал увеличенное число: это не мутация React state.
// previous + 1 лишь яснее выражает намерение.
// Изменение initialCount после mount не переинициализирует state.
// Strict Mode может вызвать инициализатор дважды в dev-режиме.
// Math.random() сохранён из исходника, но не является чистым вычислением.
// Если нужен воспроизводимый результат или SSR, следует передать
// заранее полученное значение или использовать детерминированный расчёт.
