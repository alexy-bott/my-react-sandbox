import {useHover} from './useHover'

export function UseHoverTask() {
  const [ref, hovered] = useHover<HTMLDivElement>()

  return (
    <div className="task-card">
      <div ref={ref} tabIndex={0}>
        {hovered ? 'Hovered' : 'Not hovered'}
      </div>
    </div>
  )
}
