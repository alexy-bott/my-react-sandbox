import type {DependencyList, EffectCallback} from 'react'

// Это учебный файл: реализуй оба хука здесь.
// Демонстрационный UI в папке demo/ автоматически проверяет текущую реализацию.

export function useDebounceEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  // TODO (этап 1): реализуй debounce effect.
  // Удали временную строку void после реализации.
  void [effect, deps, delay]
}

export function useThrottleEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  // TODO (этап 2): реализуй throttle effect.
  // Удали временную строку void после реализации.
  void [effect, deps, delay]
}
