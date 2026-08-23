import type {Dispatch, SetStateAction} from 'react'

export function useToggle(_defaultValue = false) {
  void _defaultValue

  const value = false
  const toggle = () => undefined
  const setValue: Dispatch<SetStateAction<boolean>> = () => undefined

  return [value, toggle, setValue] as const
}
