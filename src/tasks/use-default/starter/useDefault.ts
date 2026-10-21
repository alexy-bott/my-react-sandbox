// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

import type {Dispatch, SetStateAction} from 'react'

export function useDefault<T>(defaultValue: T, initialValue: T | (() => T)) {
  void initialValue

  const setValue: Dispatch<SetStateAction<T | null | undefined>> = () => undefined

  return [defaultValue, setValue] as const
}
