import {createRef, type RefObject} from 'react'

export function useFocus<T extends HTMLElement>(): [RefObject<T | null>, () => void] {
  return [createRef<T>(), () => undefined]
}
