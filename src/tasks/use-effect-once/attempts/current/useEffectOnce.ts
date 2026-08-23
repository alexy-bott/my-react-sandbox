import type {EffectCallback} from 'react'

export function useEffectOnce(_effect: EffectCallback): void {
  void _effect
}
