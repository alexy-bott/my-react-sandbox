// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

import type {Dispatch, SetStateAction} from 'react'

export function useStateWithReset<T>(_initialValue: T | (() => T)) {
  void _initialValue
  const value = undefined as T
  const setValue: Dispatch<SetStateAction<T>> = () => undefined
  const reset = () => undefined

  return [value, setValue, reset] as const
}
