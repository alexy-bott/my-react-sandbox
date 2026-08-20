import type {RefObject} from 'react'

type OutsideEvent = MouseEvent | TouchEvent
type OutsideEventType = 'mousedown' | 'touchstart'

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: OutsideEvent) => void,
  eventType: OutsideEventType = 'mousedown',
  eventOptions?: boolean | AddEventListenerOptions,
) {
  void ref
  void handler
  void eventType
  void eventOptions
}
