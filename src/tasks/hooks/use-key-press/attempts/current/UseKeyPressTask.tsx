import {useState} from 'react'
import {useKeyPress} from './useKeyPress'

export function UseKeyPressTask() {
  const [detectedCount, setDetectedCount] = useState(0)

  useKeyPress('a', (event) => {
    event.preventDefault()
    console.log('The "a" key was pressed')
    setDetectedCount((count) => count + 1)
  })

  return (
    <div className="task-card">
      <p>Нажми клавишу «a» и проверь сообщение в console.</p>
      <p>Detected &quot;a&quot;: {detectedCount}</p>
    </div>
  )
}
