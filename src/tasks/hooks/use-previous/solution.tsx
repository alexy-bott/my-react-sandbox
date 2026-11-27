import { useRef, useEffect } from 'react'
import { useState } from 'react'

function usePrevious<T>(state: T): T | undefined {
  const previous = useRef<T | undefined>(undefined)
  useEffect(() => {
    previous.current = state
  }, [state])
  return previous.current
}

// Готовый интерфейс: вызывает хук на каждом рендере счётчика.

export function UsePreviousTask() {
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)

  return (
    <div className="task-card">
      <p>current: {count}</p>
      <p>previous: {previousCount}</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Increase
      </button>{' '}
      <button type="button" onClick={() => setCount((value) => value - 1)}>
        Decrease
      </button>
    </div>
  )
}
