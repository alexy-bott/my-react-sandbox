import React, { useState, useEffect, StrictMode } from 'react';
import { createRoot } from "react-dom/client";
const fetchRandomNumber = () => Math.random() < 0.5
  ? Promise.resolve(Math.random())
  : Promise.reject(new Error('Oшибка запроса.'));
const App = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    let active = true;
    // Эффект синхронно возвращает очистку; подписка не зависит от исхода запроса.
    const onScroll = () => setScroll(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll);
    fetchRandomNumber().then(value => { if (active) setNumber(value); }).catch(reason => { if (active) setError(reason); });
    return () => {
      active = false;
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return <div>{error && <p>{error.message}</p>}<div> Number: {number} </div><div> Scroll: {scroll} </div></div>;
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<StrictMode><App /></StrictMode>);
