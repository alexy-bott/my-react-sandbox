import {useRef, useState} from 'react'
import {useClickOutside} from './useClickOutside'

export function UseClickOutsideTask() {
  const target = useRef<HTMLDivElement>(null)
  const [outsideClicks, setOutsideClicks] = useState(0)

  useClickOutside(target, () => {
    console.log('Clicked outside')
    setOutsideClicks((count) => count + 1)
  })

  return (
    <div className="task-card">
      <div ref={target}>Click outside me</div>
      <div>Maybe here?</div>
      <p>Outside clicks: {outsideClicks}</p>
    </div>
  )
}
