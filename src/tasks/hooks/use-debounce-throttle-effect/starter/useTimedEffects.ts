import type {DependencyList, EffectCallback} from 'react'

// В этом файле ты реализуешь два хука. UI для проверки находится в demo/.
// EffectCallback — функция эффекта; она может вернуть функцию очистки (cleanup).
// DependencyList — массив зависимостей, определяющий, когда эффект пересчитывается.

export function useDebounceEffect(
  _effect: EffectCallback,
  _deps: DependencyList,
  _delay: number,
) {
  // TODO (этап 1): реализуй debounce effect.
}

export function useThrottleEffect(
  _effect: EffectCallback,
  _deps: DependencyList,
  _delay: number,
) {
  // TODO (этап 2): реализуй throttle effect.
}
