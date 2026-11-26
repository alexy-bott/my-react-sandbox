// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

export function useArray<T>(initialValue: T[]) {
  return {
    value: initialValue,
    push: (_item: T) => void _item,
    removeByIndex: (_index: number) => void _index,
  }
}
