import { useCallback, useEffect, useState, type ComponentType } from 'react';

// Button используется в исходнике, но его определение не предоставлено.
// Это только объявление предполагаемого контракта, не реализация и не мок.
// Пример разбора не является самодостаточным запускаемым приложением.
declare const Button: ComponentType<{ onClick: () => void }>;

function WindowEvent({ event, handler, options }: {
  event: string;
  handler: EventListener;
  options?: EventListenerOptions;
}) {
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener(event, handler, options);
    return () => window.removeEventListener(event, handler, options);
  }, [event, handler, options]);

  return null;
}

// Обработчик не зависит от состояния App. Можно вынести его из компонента.
// В исходнике inline-функция создавалась заново на каждом рендере,
// из-за чего эффект снимал старую подписку и подключал новую.
const handleWindowClick: EventListener = () => console.log('click');

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Исправлено несовпадение имён onclick/onClick.
  // Функциональное обновление не требует зависимости isVisible.
  const onClick = useCallback(() => {
    setIsVisible(previous => !previous);
  }, []);

  return (
    <>
      <Button onClick={onClick} />
      <WindowEvent event="click" handler={handleWindowClick} />
      {isVisible && <div>lorem ipsum</div>}
    </>
  );
}

// Не удаляем реальные зависимости эффекта: при их изменении подписку
// нужно заменить. Если вызывающий код передаёт options как новый объект,
// ему следует стабилизировать options, когда значения не изменяются.
// useCallback для Button полезен только если его потребителю важна
// стабильная ссылка; в исходнике реализация Button неизвестна.
// Дополнительный setup/cleanup в Strict Mode не является ошибкой.
