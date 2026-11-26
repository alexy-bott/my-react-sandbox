import {useState} from 'react'
import {useThrottle} from './useThrottle'

export function UseThrottleTask() {
  const [value, setValue] = useState('')
  const throttledValue = useThrottle(value, 1000)
  return (
    <div className="task-card">
      <input value={value} onChange={event => setValue(event.target.value)} placeholder="Вводи текст" />
      <p>Сразу: {value}</p>
      <p>useThrottle (1000 мс): {throttledValue}</p>
    </div>
  )
}
