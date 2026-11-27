import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState({ name: 'Anton' });

  // Существенная ошибка: в исходнике меняется объект состояния напрямую.
  // React не получает вызова setter и не планирует рендер из-за мутации.
  // Следующий рендер по другой причине может показать изменённое имя.
  // Создаём новый объект через setter; остальные поля сохраняются.
  const handleBtnClick2 = () => {
    setCount2(previous => ({ ...previous, name: 'Alex' }));
  };

  // Существенная ошибка: useCallback(..., []) захватывает первый btnClick,
  // а тот — count = 0. Повторные клики снова запрашивают значение 1.
  // Функциональное обновление получает предыдущее состояние.
  // Мемоизация обработчика здесь не нужна: он передаётся обычной кнопке.
  const handleBtnClick = () => {
    setCount(previous => previous + 1);
  };

  // Неиспользуемые useEffect/useMemo и промежуточный btnClick удалены.
  // Сохраняем исходный UI, не добавляя новый функционал.
  return (
    <div>
      <button onClick={handleBtnClick}>{count}</button>
      <button onClick={handleBtnClick2}>{count2.name}</button>
      <div /><input type="text" />
    </div>
  );
}

// Самопроверка: первая кнопка — 0 → 1 → 2; вторая — Anton → Alex.
// Вторая кнопка должна обновлять имя независимо от кликов по первой.
