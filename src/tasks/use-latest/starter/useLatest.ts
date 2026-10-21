// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

import type {RefObject} from 'react'

export function useLatest<T>(_value: T): RefObject<T> {
  void _value
  // `undefined as T` — временная заглушка: утверждение типа не создаёт значение T.
  // При решении верни ref, который хранит переданное значение.
  return {current: undefined as T}
}
