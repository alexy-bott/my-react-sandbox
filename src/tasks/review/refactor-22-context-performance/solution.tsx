import { useMemo, type FC } from "react";
import "./styles.css";
import { AppProvider, useApp } from "./use-app";
import { fibonacci } from "./fibonacci";
// Изменение общего контекста может обновить потребителя при прежнем number.
const clockFormat = new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
const ComplexComponent: FC<{ number: number }> = ({ number }) => {
  console.log("ComplexComponent render");
  const { increment } = useApp();
  const expensiveComputationsResult = useMemo(() => fibonacci(number), [number]);
  return <div>result is: {expensiveComputationsResult}<button onClick={increment}>increase count</button></div>;
};
const Clock = () => {
  console.log("Clock render");
  const { now } = useApp();
  return <h1>{clockFormat.format(now)}</h1>;
};
const Count = () => {
  console.log("Count render");
  const { count } = useApp();
  return <div>You clicked {count} times</div>;
};
const OtherComponent = () => {
  console.log("OtherComponent");
  return <div>OtherComponent</div>;
};
export default function App() {
  return <AppProvider>
    <h1>Improve perf & reduce rendres count</h1>
    <p>Using current tech stack, improve performance using various react optimizations techniques</p>
    <hr style={{ marginBottom: 24 }} /><ComplexComponent number={38}/><Clock/>
    <hr style={{ marginBottom: 24 }} /><ComplexComponent number={38} /><Clock /><Count /><OtherComponent />
  </AppProvider>;
}

// Реализация AppProvider не дана. Если время и count меняют один context value,
// разделение подписок на время, счётчик и действия сократит рендеры потребителей.
// React.memo сам по себе обновление потребителя контекста не остановит.
