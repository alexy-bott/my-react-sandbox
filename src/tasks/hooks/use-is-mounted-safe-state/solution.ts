import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'
export function useIsMounted() {
  const mounted = useRef(false)
  useLayoutEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  return useCallback(() => mounted.current, [])
}

export function useSafeState<T>(
  initial: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [value, update] = useState(initial)
  const mounted = useIsMounted()
  const setValue = useCallback(
    (next: SetStateAction<T>) => {
      if (mounted()) update(next)
    },
    [mounted],
  )
  return [value, setValue]
}
