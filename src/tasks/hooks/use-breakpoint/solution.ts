import { useSyncExternalStore } from 'react'
export function createBreakpoint<T extends Record<string, number>>(
  breakpoints: T,
) {
  const names = (
    Object.keys(breakpoints) as Array<Extract<keyof T, string>>
  ).sort((a, b) => breakpoints[b] - breakpoints[a])
  function subscribe(update: () => void) {
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }
  return function useBreakpoint() {
    return useSyncExternalStore(
      subscribe,
      () =>
        names.find((name) => window.innerWidth >= breakpoints[name]) ??
        names[names.length - 1],
    )
  }
}
