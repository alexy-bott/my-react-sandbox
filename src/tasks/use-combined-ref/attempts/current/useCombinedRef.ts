import type {Ref, RefCallback} from 'react'

type PossibleRef<T> = Ref<T> | null | undefined

export function useCombinedRef<T>(..._refs: PossibleRef<T>[]): RefCallback<T> {
  void _refs
  return () => undefined
}
