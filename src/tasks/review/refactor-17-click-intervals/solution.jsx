import React from 'react';
const PleaseReviewMe = () => {
  const [items, setItems] = React.useState([{ id: 1 }]);
  const count = items.length;
  const currentCount = React.useRef(count);
  React.useEffect(() => { currentCount.current = count; }, [count]);
  React.useEffect(() => {
    let timer;
    // После клика нужен периодический лог. Повторный клик не размножает таймеры.
    const onClick = () => {
      if (timer === undefined) timer = setInterval(() => console.log(currentCount.current), 1000);
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      clearInterval(timer);
    };
  }, []);
  const click = () => setItems(previous => [...previous, { id: previous.length + 1 }]);
  return <React.Fragment>
    Current count: {count}
    <ul>{items.map((item) => (<li key={item.id}>{item.id}</li>))}</ul>
    <button onClick={click}>add once</button>
  </React.Fragment>;
};
export default PleaseReviewMe;
