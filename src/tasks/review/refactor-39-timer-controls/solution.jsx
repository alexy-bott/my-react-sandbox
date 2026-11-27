import { useState, useEffect } from "react";
import "./App.css";
export default function App() {
  const [started, setStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  // started управляет и надписью, и сроком жизни единственного интервала.
  const stopHandler = () => { setStarted(false); setCurrentTime(0); };
  const startHandler = () => setStarted(previous => !previous);
  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => setCurrentTime(time => time + 1), 1000);
    return () => clearInterval(timer);
  }, [started]);
  const pulse = currentTime > 0 && currentTime % 5 === 0;
  return <main className="main"><div>
    <button onClick={startHandler}>{started ? "Pause" : "Start"}</button>
    <button onClick={stopHandler}>Stop</button>
    <div className={pulse ? "timer pulsate" : "timer"}>{currentTime}</div>
  </div></main>;
}
