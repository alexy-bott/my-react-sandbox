import { useCallback, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { fetchDate } from './api';
import './styles/styles.css';

function App() {
  const [date, setDate] = useState<string>();
  const [width, setWidth] = useState(() => document.documentElement.clientWidth);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;
    // В исходнике каждый рендер запускает запрос и добавляет ещё одну подписку.
    fetchDate().then(value => { if (active) setDate(value); })
      .catch(error => { if (active) console.error(error); });
    const onResize = () => setWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', onResize);
    return () => { active = false; window.removeEventListener('resize', onResize); };
  }, []);

  const increment = useCallback(() => setCount(previous => previous + 1), []);
  return <div className="App">
    <div>Server date: {date}</div><div>Client width: {width}px</div>
    <Counter value={count} onClick={increment} />
  </div>;
}

function Counter({ value, onClick }: { value: number; onClick: () => void }) {
  // Пустые зависимости исходника удерживали обработчик первого рендера.
  // Оставляем мемоизацию по условию и указываем фактическую зависимость.
  const handleClick = useCallback(() => onClick(), [onClick]);
  return <div><button onClick={handleClick}>+</button>&nbsp;{value}</div>;
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<App />);
