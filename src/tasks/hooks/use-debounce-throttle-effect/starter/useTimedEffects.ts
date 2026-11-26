import type {DependencyList, EffectCallback} from 'react'

// В этом файле ты реализуешь два хука. UI для проверки находится в demo/.
// EffectCallback — функция эффекта; она может вернуть функцию очистки (cleanup).
// DependencyList — массив зависимостей, определяющий, когда эффект пересчитывается.

export function useDebounceEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  // TODO (этап 1): реализуй debounce effect.
  // Временные строки void ниже лишь отмечают параметры использованными,
  // чтобы TypeScript и ESLint не выдавали предупреждения.
  // Они не вызывают effect и не реализуют debounce. Удали их при решении.
  void effect
  void deps
  void delay
}

export function useThrottleEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  // TODO (этап 2): реализуй throttle effect.
  // Временные строки void ниже не выполняют эффект и не создают таймер.
  // Они нужны только для проверки исходного файла TypeScript и ESLint.
  // Удали их, когда начнёшь использовать параметры в своей реализации.
  void effect
  void deps
  void delay
}
