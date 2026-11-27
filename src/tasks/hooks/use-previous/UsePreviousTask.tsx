import {useState} from 'react'

// Твоё решение: возвращай предыдущее значение переданного аргумента.
function usePrevious<T>(_state: T): T | undefined {
  return undefined
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
