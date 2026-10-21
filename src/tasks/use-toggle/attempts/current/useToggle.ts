// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

import type {Dispatch, SetStateAction} from 'react'

export function useToggle(_defaultValue = false) {
  void _defaultValue

  const value = false
  const toggle = () => undefined
  const setValue: Dispatch<SetStateAction<boolean>> = () => undefined

  return [value, toggle, setValue] as const
}
