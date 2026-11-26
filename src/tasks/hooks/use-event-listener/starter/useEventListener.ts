// Учебная заглушка: `void` вычисляет выражение и отбрасывает его результат.
// Здесь он лишь отмечает параметры использованными для TypeScript/ESLint,
// но не реализует поведение хука. При решении замени заглушки рабочим кодом.

import type {RefObject} from 'react'

type EventMap = WindowEventMap &
  HTMLElementEventMap &
  SVGElementEventMap &
  MediaQueryListEventMap

export function useEventListener<
  K extends keyof EventMap,
  T extends HTMLElement | SVGElement | MediaQueryList,
>(
  _eventName: K,
  _handler: (event: EventMap[K]) => void,
  _target?: RefObject<T | null>,
  _options?: boolean | AddEventListenerOptions,
): void {
  void [_eventName, _handler, _target, _options]
}
