import type {Dispatch, SetStateAction} from 'react'

export function useIsMounted(): () => boolean {
  return () => false
}

export function useSafeState<T>(
  _initialState: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  void _initialState
  return [undefined as T, () => undefined]
}
