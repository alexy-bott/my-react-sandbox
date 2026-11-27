import { useState, useEffect, useCallback } from "react";
import { fetchDate } from "./api";

export default function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState();
  const [clientWidth, setClientWidth] = useState();
  // useEffect(async () => {
  // setDate(await fetchDate());
  // window.addEventListener("resize", () =>
  // setClientWidth(document.body.clientWidth),
  // );
  // });
  return (
    <div className="App">
      <div key="title">Server date: {date}</div>
      <div key="width">Client width: {clientWidth}px</div>
      <Counter value={count} onClick={() => { setCount(count + 1); }} />
    </div>
  );
};

function Counter(props) {
  console.log("CONNTER rendered [ ]");
  // Комментарий исходника просит сохранить мемоизацию callback.
  const memoizedOnClick = useCallback(() => { props.onClick(); }, []);
  return <div><button onClick={memoizedOnClick}>+</button>&nbsp;{props.value || 0}</div>;
}

