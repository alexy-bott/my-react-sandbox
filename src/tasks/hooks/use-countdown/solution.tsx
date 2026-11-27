import { useState, useRef, useEffect } from 'react'
type UseCountdownOptions = {
  countStart: number
  countStop?: number
  intervalMs?: number
  isIncrement?: boolean
}

type UseCountdownResult = {
  count: number
  start: () => void
  stop: () => void
  reset: () => void
}

function useCountdown(options: UseCountdownOptions): UseCountdownResult {
  const {
    countStart,
    countStop = 0,
    intervalMs = 1000,
    isIncrement = false,
  } = options
  const [count, setCount] = useState(countStart)
  const current = useRef(countStart)
  const timer = useRef<number | null>(null)
  function stop() {
    if (timer.current !== null) window.clearInterval(timer.current)
    timer.current = null
  }
  function start() {
    if (timer.current !== null || current.current === countStop) return
    timer.current = window.setInterval(() => {
      current.current += isIncrement ? 1 : -1
      setCount(current.current)
      if (current.current === countStop) stop()
    }, intervalMs)
  }
  useEffect(() => stop, [])
  return {
    count,
    start,
    stop,
    reset: () => {
      stop()
      current.current = countStart
      setCount(countStart)
    },
  }
}

// Готовый интерфейс для проверки команд таймера.
export function UseCountdownTask() {
  const { count, start, stop, reset } = useCountdown({ countStart: 10 })

  return (
    <div className="task-card">
      <p>Countdown: {count}</p>
      <button type="button" onClick={start}>
        Start
      </button>{' '}
      <button type="button" onClick={stop}>
        Stop
      </button>{' '}
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  )
}
