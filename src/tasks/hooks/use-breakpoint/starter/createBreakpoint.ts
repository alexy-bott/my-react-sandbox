type BreakpointName<T> = Extract<keyof T, string>

export function createBreakpoint<T extends Record<string, number>>(
  breakpoints: T,
): () => BreakpointName<T> {
  const names = Object.keys(breakpoints) as BreakpointName<T>[]

  return function useBreakpoint() {
    return names[0]
  }
}
