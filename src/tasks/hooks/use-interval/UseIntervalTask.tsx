import {useState} from 'react'

function useInterval(callback: () => void, delay: number | null): void {
  // Замени обе строки реализацией.
  void [callback, delay]
  throw new Error('Реализуй useInterval')
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
      <button type="button" onClick={() => setRunning(value => !value)}>
        {running ? 'Пауза' : 'Продолжить'}
      </button>{' '}
      <button type="button" onClick={() => setDelay(value => value === 1000 ? 500 : 1000)}>
        Изменить интервал
      </button>
    </div>
  )
}
