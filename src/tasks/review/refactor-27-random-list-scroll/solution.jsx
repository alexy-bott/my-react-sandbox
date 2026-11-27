import React, { useState, useEffect } from "react";
function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}
// имитация запроса к серверу. просто получаем число асинхронно
const randomNumber = () => Promise.resolve(randomInteger(9000, 11000));
export const RandomList = () => {
  const [testData, setTestData] = useState([]);
  const [scroll, setScroll] = useState(window.scrollY);
  useEffect(() => {
    let active = true;
    randomNumber().then(size => {
      // Используем полученный размер сразу. В исходном замыкании number равен нулю.
      if (active) setTestData(Array.from({ length: size }, () => randomInteger(0, 20)));
    });
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => {
      active = false;
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return <div>
    <div>Количество справочников: {testData.length}</div><div>Scroll: {scroll}</div>
    <div>Список полученных значений</div>
    <div >
      {testData.map((el, index) => (<div key={index}><div>Справочник {index}</div><div>{el}</div></div>))}
    </div>
  </div>;
};
