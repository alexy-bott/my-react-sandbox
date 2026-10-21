// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

import type {Dispatch, SetStateAction} from 'react'

export function useIsMounted(): () => boolean {
  return () => false
}

export function useSafeState<T>(
  _initialState: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  void _initialState
  // `undefined as T` — временное утверждение типа, а не корректное состояние.
  // Заменяй его настоящим начальным значением при реализации.
  return [undefined as T, () => undefined]
}
