import {useState} from 'react'
import {useInterval} from './useInterval'

export function UseIntervalTask() {
  const [count, setCount] = useState(0)

  useInterval(() => setCount(count + 1), 1000)

  return (
    <div className="task-card">
      <p>{count}</p>
    </div>
  )
}
