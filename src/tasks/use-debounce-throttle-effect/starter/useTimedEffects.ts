import type {DependencyList, EffectCallback} from 'react'

export function useDebounceEffect(
  _effect: EffectCallback,
  _deps: DependencyList,
  _delay: number,
) {
  void [_effect, _deps, _delay]
}

export function useThrottleEffect(
  _effect: EffectCallback,
  _deps: DependencyList,
  _delay: number,
) {
  void [_effect, _deps, _delay]
}
