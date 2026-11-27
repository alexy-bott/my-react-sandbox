import { useEffect, useRef, type EffectCallback } from 'react'
export function useEffectOnce(effect: EffectCallback) {
  const initialEffect = useRef(effect)
  useEffect(() => initialEffect.current(), [])
}
