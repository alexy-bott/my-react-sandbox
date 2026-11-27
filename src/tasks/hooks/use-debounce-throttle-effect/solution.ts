import {
  useEffect,
  useRef,
  type DependencyList,
  type EffectCallback,
} from 'react'
export function useDebounceEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  useEffect(() => {
    let cleanup: ReturnType<EffectCallback>
    const timer = setTimeout(() => {
      cleanup = effect()
    }, delay)
    return () => {
      clearTimeout(timer)
      cleanup?.()
    }
  }, [...deps, delay])
}

export function useThrottleEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  const last = useRef(-Infinity)
  useEffect(() => {
    let cleanup: ReturnType<EffectCallback>
    const run = () => {
      last.current = performance.now()
      cleanup = effect()
    }
    const wait = delay - (performance.now() - last.current)
    const timer = wait > 0 ? setTimeout(run, wait) : undefined
    if (wait <= 0) run()
    return () => {
      clearTimeout(timer)
      cleanup?.()
    }
  }, [...deps, delay])
  useEffect(
    () => () => {
      last.current = -Infinity
    },
    [],
  )
}
