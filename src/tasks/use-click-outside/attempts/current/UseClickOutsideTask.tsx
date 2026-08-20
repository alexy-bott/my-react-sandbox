import {useRef} from 'react'
import {useClickOutside} from './useClickOutside'

export function UseClickOutsideTask() {
  const target = useRef<HTMLDivElement>(null)

  useClickOutside(target, () => {
    console.log('Clicked outside')
  })

  return (
    <div className="task-card">
      <div ref={target}>Click outside me</div>
      <div>Maybe here?</div>
    </div>
  )
}
