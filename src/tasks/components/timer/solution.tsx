import { useEffect, useState } from 'react'
export function TimerTask() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    if (!running) return
    const timer = setInterval(() => setSeconds((value) => value + 1), 1000)
    return () => clearInterval(timer)
  }, [running])
  return (
    <div>
      {seconds} с<button onClick={() => setRunning(true)}>Старт</button>
      <button onClick={() => setRunning(false)}>Пауза</button>
      <button
        onClick={() => {
          setRunning(false)
          setSeconds(0)
        }}
      >
        Сброс
      </button>
    </div>
  )
}
