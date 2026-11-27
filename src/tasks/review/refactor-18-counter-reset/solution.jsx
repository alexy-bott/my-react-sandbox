import React, { useState, useEffect } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Count updated: ${count}`);
    if (count === 5) { setCount(0); }
  }, [count]);
  const increment = () => { setCount(previous => previous + 1); };
  return <div><p>Count: {count}</p>{/* Без обработчика значение остаётся нулём, эффект никогда не видит пять. */}
    <button onClick={increment}>+1</button></div>;
};
export default Counter;
