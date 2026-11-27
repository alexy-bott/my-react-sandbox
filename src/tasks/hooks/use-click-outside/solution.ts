import { useEffect, type RefObject } from 'react'
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  eventType: 'mousedown' | 'touchstart' = 'mousedown',
  eventOptions?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    function onEvent(event: MouseEvent | TouchEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      )
        handler(event)
    }
    document.addEventListener(eventType, onEvent, eventOptions)
    return () => document.removeEventListener(eventType, onEvent, eventOptions)
  }, [ref, handler, eventType, eventOptions])
}
