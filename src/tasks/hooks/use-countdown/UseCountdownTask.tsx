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
  // Замени обе строки реализацией.
  void options
  throw new Error('Реализуй useCountdown')
}

// Готовый интерфейс для проверки команд таймера.
export function UseCountdownTask() {
  const {count, start, stop, reset} = useCountdown({countStart: 10})

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
