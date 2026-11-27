import { memo, useCallback, useState, type MouseEventHandler } from 'react';

// В исходнике отсутствуют импорты, закрывающая скобка вызова memo,
// а атрибут onclick написан неверно для JSX (нужен onClick).
const Button = memo(function Button({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  console.log('render');
  return <button onClick={onClick}>Click me</button>;
});

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Существенная ошибка: исходный callback с [] захватывает false.
  // После первого клика он снова передаёт true, вместо переключения.
  // Функциональный setter не читает isVisible из замыкания.
  // useCallback сохраняет ссылку для memo-компонента Button.
  const onClick = useCallback(() => {
    setIsVisible(previous => !previous);
  }, []);

  return (
    <>
      <Button onClick={onClick} />
      {isVisible && <div>lorem ipsum</div>}
    </>
  );
}

// Самопроверка: текст скрыт → виден → скрыт при повторных кликах.
// Стабильный onClick позволяет memo пропускать рендер Button при
// изменении isVisible; memo не гарантирует отсутствие всех рендеров.
// Для настолько простой кнопки можно отказаться от обеих оптимизаций;
// сохранение memo здесь уместно именно как часть учебной задачи.
