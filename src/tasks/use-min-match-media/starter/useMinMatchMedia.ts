// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

export interface MediaDimensions {
  width: number
  height: number
}

export const useMinMatchMedia = (
  mediaParams: MediaDimensions,
  callback?: () => void,
): boolean => {
  void mediaParams
  void callback

  return false
}
