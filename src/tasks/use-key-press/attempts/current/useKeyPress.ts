// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

type KeyPressOptions = {
  target?: EventTarget
  event?: 'keydown' | 'keyup'
}

export function useKeyPress(
  key: string,
  callback: (event: KeyboardEvent) => void,
  {target = window, event = 'keydown'}: KeyPressOptions = {},
) {
  void key
  void callback
  void target
  void event
}
