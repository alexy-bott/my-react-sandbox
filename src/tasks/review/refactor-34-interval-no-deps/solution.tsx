import { useEffect, useEffectEvent, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Эффект с [] захватывал count = 0: каждый тик логировал 0
  // и пытался установить 1. Функциональный setter решает обновление.
  // Для логирования актуального состояния используем Effect Event
  // (React 19.2+, установленная версия проекта).
  const logCount = useEffectEvent(() => {
    console.log(count);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      logCount(); // последнее зафиксированное React значение до обновления
      setCount(previous => previous + 1);
    }, 1000);

    // Очистка уже была корректной в исходнике — сохраняем её.
    return () => clearInterval(timer);
  }, []);

  return <div>Count: {count}</div>;
};

export default Counter;

// Не переносим console.log внутрь функционального updater:
// updater должен быть чистым и может быть вызван повторно в dev-режиме.
// Effect Event не добавляется в зависимости; вызывается из эффекта
// (включая созданный им callback). В более старом React можно
// синхронизировать актуальное значение через ref после commit.
// При обычных тиках: лог 0, экран 1; лог 1, экран 2 и т. д.
