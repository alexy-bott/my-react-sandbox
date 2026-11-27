import { memo, useCallback, useState } from 'react';

type SubElementProps = {
  clicker: () => void;
  count: number;
};

// Обычный memo не подходит: count меняется при каждом клике.
// Компаратор явно разрешает пропуск обновлений на нечётном count.
// Сравниваем и clicker: нельзя удерживать устаревший обработчик.
const SubElement = memo(function SubElement({
  clicker,
  count,
}: SubElementProps) {
  return <>Sub: {count} <br /><button onClick={clicker}>Increment</button></>;
}, (previous, next) =>
  previous.clicker === next.clicker &&
  (previous.count === next.count || next.count % 2 !== 0)
);

export const ParentElement = () => {
  const [count, setCount] = useState(0);

  // Стабильный обработчик не захватывает count благодаря updater.
  const increment = useCallback(() => setCount(previous => previous + 1), []);

  return <>Parent: {count} <br /><SubElement clicker={increment} count={count} /></>;
};

// При обычных последовательных кликах: Parent 0,1,2,3,4;
// Sub 0,0,2,2,4. Пропуск нечётного значения намеренно оставляет
// предыдущее отображаемое значение; это специальное условие задачи.
// memo — оптимизация, а не гарантия отсутствия любых рендеров
// (например, Strict Mode, размонтирование или внутреннее состояние).
// Контракт clicker/count сохранён; не округляем count в родителе.
