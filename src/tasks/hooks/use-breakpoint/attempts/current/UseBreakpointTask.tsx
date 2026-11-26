import {createBreakpoint} from './createBreakpoint'

const useBreakpoint = createBreakpoint({
  mobile: 0,
  tablet: 768,
  desktop: 1024,
})

export function UseBreakpointTask() {
  const breakpoint = useBreakpoint()

  return (
    <div className="task-card">
      {breakpoint === 'mobile' && <p>Mobile</p>}
      {breakpoint === 'tablet' && <p>Tablet</p>}
      {breakpoint === 'desktop' && <p>Desktop</p>}
    </div>
  )
}
