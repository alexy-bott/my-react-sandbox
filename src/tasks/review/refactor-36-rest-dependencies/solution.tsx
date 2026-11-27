import { useEffect, useState, type FC } from 'react';

const data = { name: '54', age: 21, info: 22 };

const MainFc: FC<typeof data> = ({ age, info }) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    // Без cleanup интервал продолжает работать после unmount;
    // Strict Mode выявляет проблему дополнительным циклом эффекта.
    const timer = setInterval(() => setState(previous => previous + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // В исходнике вычисление не предоставлено, поэтому не выдумываем его.
    // Здесь оно должно использовать age и info (исходный rest).
    // Если нужен объект, создай его внутри эффекта, а не в зависимостях.
  }, [age, info]);

  return <div>{state}</div>;
};

export const App = () => <MainFc {...data} />;

// rest создаётся при каждой деструктуризации. React сравнивает
// зависимости по Object.is, а не по содержимому объектов.
// Перечисляем конкретные поля, которые использует вычисление;
// name не входит в исходный rest и не является зависимостью.
// Если вычисление чистое и выдаёт значение для рендера, лучше
// выполнять его при рендере (useMemo — при измеримой необходимости).
// Публичный контракт пропсов сохранён; FC импортирован как тип.
