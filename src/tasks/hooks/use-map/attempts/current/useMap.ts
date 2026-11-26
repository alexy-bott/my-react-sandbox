// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

export type MapInput<K, V> = Map<K, V> | Array<[K, V]>

export function useMap<K, V>(_defaultValue: MapInput<K, V>) {
  void _defaultValue
  const map = new Map<K, V>()

  return {
    map,
    set: (_key: K, _value: V) => void [_key, _value],
    setAll: (_entries: MapInput<K, V>) => void _entries,
    remove: (_key: K) => void _key,
    reset: () => undefined,
  }
}
