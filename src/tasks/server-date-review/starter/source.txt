import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchDate } from "./api";
import "./styles/styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState<string>();
  const [clientWidth, setClientWidth] = useState<number>();
  // @ts-ignore
  useEffect(async () => {
    setDate(await fetchDate());
    window.addEventListener("resize", () =>
      setClientWidth(document.body.clientWidth),
    );
  });
  return (
    <div className="App">
      <div key="title">Server date: {date}</div>
      <div key="width">Client width: {clientWidth}px</div>
      <Counter value={count} onClick={() => { setCount(count + 1); }} />
    </div>
  );
};

function Counter(props: any) {
  console.log("CONNTER rendered [ ]");
  // Комментарий исходника просит сохранить мемоизацию callback.
  const memoizedOnClick = useCallback(() => { props.onClick(); }, []);
  return <div><button onClick={memoizedOnClick}>+</button>&nbsp;{props.value || 0}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
