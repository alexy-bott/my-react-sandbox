import type {DependencyList, EffectCallback} from 'react'

// Это учебный файл: реализуй оба хука здесь.
// Демонстрационный UI в папке demo/ автоматически проверяет текущую реализацию.

export function useDebounceEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  // TODO (этап 1): реализуй debounce effect.
  // void ниже помечает параметры как использованные для TypeScript и ESLint.
  // Он не вызывает effect и не реализует debounce.
  // Удали эту техническую заглушку, когда напишешь реализацию.
  void [effect, deps, delay]
}

export function useThrottleEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  // TODO (этап 2): реализуй throttle effect.
  // void ниже помечает параметры как использованные для TypeScript и ESLint.
  // Он не вызывает effect и не реализует throttle.
  // Удали эту техническую заглушку, когда напишешь реализацию.
  void [effect, deps, delay]
}
