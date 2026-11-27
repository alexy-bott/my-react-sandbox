import type {RefObject} from 'react'

type OutsideEvent = MouseEvent | TouchEvent
type OutsideEventType = 'mousedown' | 'touchstart'

export function useClickOutside<T extends HTMLElement>(
  _ref: RefObject<T | null>,
  _handler: (event: OutsideEvent) => void,
  _eventType: OutsideEventType = 'mousedown',
  _eventOptions?: boolean | AddEventListenerOptions,
) {
}
