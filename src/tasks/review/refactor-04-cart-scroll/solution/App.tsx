// App.tsx
import { useEffect, useRef, useState } from "react";
import "./styles.css";
import Item from "./Item";
export default function App() {
  const [count, setCount] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  // Подписка в рендере накапливала обработчики. Управляем только своей панелью.
  useEffect(() => {
    const onScroll = () => {
      if (!panel.current) return;
      const y = window.scrollY;
      panel.current.style.position = y > 100 ? "absolute" : "static";
      panel.current.style.top = y > 100 ? y + "px" : "";
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="App"><div className="block-wrapper">
    <div className="top-section" ref={panel}>
      <button onClick={() => { alert(count); }}>Show count</button>
      <button onClick={() => { setCount(0); }}>Reset count</button>
    </div>
    <Item onAdd={() => { setCount(previous => previous + 1); }} />
    <Item onAdd={() => { setCount(previous => previous + 1); }} />
    <Item onAdd={() => { setCount(previous => previous + 1); }} />
    <Item onAdd={() => { setCount(previous => previous + 1); }} />
    <Item onAdd={() => { setCount(previous => previous + 1); }} />
    <Item onAdd={() => { setCount(previous => previous + 1); }} />
  </div></div>;
}
