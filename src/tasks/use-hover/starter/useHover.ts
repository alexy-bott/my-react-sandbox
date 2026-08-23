import type {RefCallback} from 'react'

export function useHover<T extends Element>(): [RefCallback<T>, boolean] {
  return [() => undefined, false]
}
