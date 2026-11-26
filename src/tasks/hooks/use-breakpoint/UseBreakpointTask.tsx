type BreakpointName<T> = Extract<keyof T, string>

function createBreakpoint<T extends Record<string, number>>(
  breakpoints: T,
): () => BreakpointName<T> {
  // Реализуй фабрику и возвращаемый ею хук.
  void breakpoints

  return function useBreakpoint(): BreakpointName<T> {
    throw new Error('Реализуй createBreakpoint')
  }
}

// Фабрика вызывается один раз вне компонента.
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
