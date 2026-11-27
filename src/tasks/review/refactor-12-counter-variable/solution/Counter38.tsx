import { useState } from 'react';

export default function CounterApp() {
  // Исходный фрагмент не компилируется: отсутствует открывающая
  // фигурная скобка функции и нарушены границы return.
  // Если исправить только синтаксис, клик изменит локальную переменную,
  // но значение на экране останется прежним. При новом рендере — снова 0.
  const [count, setCount] = useState(0);
  const changeCount = () => setCount(previous => previous + 1);

  return (
    <div className="App">
      <p>Чтo произойдет при клике по кнопке</p>
      {/* hi не является стандартным HTML-заголовком. */}
      <h1>Count = {count}</h1>
      <button onClick={changeCount}>кнопка</button>
    </div>
  );
}
