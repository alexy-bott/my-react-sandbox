// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

export type PlainObject = Record<string, unknown>

export type ObjectUpdate<T extends PlainObject> = Partial<T> | ((current: T) => Partial<T>)

export function useObject<T extends PlainObject>(_initialValue: T = {} as T) {
  const value = _initialValue
  const setValue = (_update: ObjectUpdate<T>) => void _update

  return [value, setValue] as const
}
