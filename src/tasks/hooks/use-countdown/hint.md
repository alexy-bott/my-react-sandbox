# Solution из источника

Источник хранит текущее значение и флаг запуска через `useState`. Методы `start`, `stop` и `reset` создаются через `useCallback`; `reset` также возвращает `countStart`.

Пока отсчёт запущен, `useEffect` создаёт `setInterval`. На каждом тике значение увеличивается или уменьшается на единицу в зависимости от `isIncrement`. При достижении `countStop` вызывается `stop`. Cleanup эффекта очищает interval через `clearInterval`.

```ts
import {useCallback, useEffect, useState} from 'react'

interface UseCountdownOptions {
  countStart: number
  countStop?: number
  intervalMs?: number
  isIncrement?: boolean
}

interface UseCountdownReturn {
  count: number
  start: () => void
  stop: () => void
  reset: () => void
}

export default function useCountdown({
  countStart,
  countStop = 0,
  intervalMs = 1000,
  isIncrement = false,
}: UseCountdownOptions): UseCountdownReturn {
  const [count, setCount] = useState(countStart)
  const [running, setRunning] = useState(false)

  const reset = useCallback(() => {
    setRunning(false)
    setCount(countStart)
  }, [countStart])

  const start = useCallback(() => {
    setRunning(true)
  }, [])

  const stop = useCallback(() => {
    setRunning(false)
  }, [])

  useEffect(() => {
    if (!running) return

    const id = setInterval(() => {
      if (count === countStop) return stop()

      if (isIncrement) {
        setCount((previous) => previous + 1)
      } else {
        setCount((previous) => previous - 1)
      }
    }, intervalMs)

    return () => clearInterval(id)
  }, [count, countStop, intervalMs, isIncrement, running])

  return {count, start, stop, reset}
}
```
