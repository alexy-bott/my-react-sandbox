import { useRef, useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'

function useInterval(callback: () => void, delay: number | null): void {
  const latest = useRef(callback)
  useLayoutEffect(() => {
    latest.current = callback
  }, [callback])
  useEffect(() => {
    if (delay === null) return
    const timer = window.setInterval(() => latest.current(), delay)
    return () => window.clearInterval(timer)
  }, [delay])
}

// Готовый интерфейс для проверки interval, паузы и изменения задержки.
export function UseIntervalTask() {
  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(true)
  const [delay, setDelay] = useState(1000)

  useInterval(() => setCount(count + 1), running ? delay : null)

  return (
    <div className="task-card">
      <p>Count: {count}</p>
      <p>Интервал: {delay} мс</p>
      <button type="button" onClick={() => setRunning((value) => !value)}>
        {running ? 'Пауза' : 'Продолжить'}
      </button>{' '}
      <button
        type="button"
        onClick={() => setDelay((value) => (value === 1000 ? 500 : 1000))}
      >
        Изменить интервал
      </button>
    </div>
  )
}
