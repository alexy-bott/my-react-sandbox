import type {Dispatch, SetStateAction} from 'react'

export function useDefault<T>(defaultValue: T, initialValue: T | (() => T)) {
  void initialValue

  const setValue: Dispatch<SetStateAction<T | null | undefined>> = () => undefined

  return [defaultValue, setValue] as const
}
