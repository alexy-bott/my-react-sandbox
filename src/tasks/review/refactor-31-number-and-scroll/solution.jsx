import React, { useState, useEffect } from 'react';
// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());
const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();
  useEffect(() => {
    let active = true;
    // Эффект синхронно возвращает очистку; подписка не зависит от исхода запроса.
    const onScroll = () => setScroll(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll);
    fetchRandomNumber().then(value => { if (active) setNumber(value); });
    return () => {
      active = false;
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return <div><div> Number: { number } </div><div> Scroll: { scroll } </div></div>;
}
