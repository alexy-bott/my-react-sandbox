import { memo, useState } from 'react';

// Выделяем независимый список и мемоизируем его. При обновлении count
// родитель рендерится, но ссылка на numbers из useState не меняется.
// Поэтому memo может пропустить рендер списка и повторный map.
const NumbersList = memo(function NumbersList({
  numbers,
}: {
  numbers: readonly number[];
}) {
  return (
    <ul>
      {numbers.map(num => <li key={num}>{num}</li>)}
    </ul>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [numbers] = useState([1, 23, 4, 6, 21, 3]);

  return (
    <div>
      {/* В исходнике отображался литерал "count", а не значение. */}
      <div>{count}</div>
      <button onClick={() => setCount(previous => previous + 1)}>
        Increment
      </button>
      <NumbersList numbers={numbers} />
    </div>
  );
}

// Ключи num подходят для данного списка с уникальными числами.
// Для изменяемого списка с дубликатами нужны стабильные идентификаторы.
// useCallback для обработчика обычной кнопки здесь не даёт пользы.
// Для шести элементов memo может быть дороже самой работы;
// оптимизация оставлена как учебная цель, а не обязательное правило.
