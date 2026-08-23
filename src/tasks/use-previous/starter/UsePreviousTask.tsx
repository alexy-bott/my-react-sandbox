import {useState} from 'react'
import {usePrevious} from './usePrevious'

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
