import type {RefObject} from 'react'

export function useLatest<T>(_value: T): RefObject<T> {
  void _value
  return {current: undefined as T}
}
