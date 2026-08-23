import {useRef, useState} from 'react'
import {useEventListener} from './useEventListener'

export function UseEventListenerTask() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [clickCount, setClickCount] = useState(0)

  useEventListener('click', () => {
    setClickCount((count) => count + 1)
  }, targetRef)

  return (
    <div className="task-card">
      <div ref={targetRef} tabIndex={0}>
        Нажимайте здесь
      </div>
      <p>Кликов внутри: {clickCount}</p>
    </div>
  )
}
