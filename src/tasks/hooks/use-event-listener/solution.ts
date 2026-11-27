import { useEffect } from 'react'
import type { RefObject } from 'react'

type EventMap = WindowEventMap &
  HTMLElementEventMap &
  SVGElementEventMap &
  MediaQueryListEventMap

export function useEventListener<
  K extends keyof EventMap,
  T extends HTMLElement | SVGElement | MediaQueryList,
>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  target?: RefObject<T | null>,
  options?: boolean | AddEventListenerOptions,
): void {
  useEffect(() => {
    const element: EventTarget | null = target ? target.current : window
    const listener = (event: Event) => handler(event as EventMap[K])
    element?.addEventListener(eventName, listener, options)
    return () => element?.removeEventListener(eventName, listener, options)
  })
}
