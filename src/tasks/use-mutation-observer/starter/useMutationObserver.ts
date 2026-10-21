// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

export function useMutationObserver(
  _target: Node | null,
  _callback: MutationCallback,
  _options: MutationObserverInit,
): void {
  void [_target, _callback, _options]
}
