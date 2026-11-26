# Пример решения из источника

В исходном материале hook реализован так:

```ts
import {useEffect, useRef} from 'react'
import type {RefObject} from 'react'

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent | FocusEvent) => void,
  eventType: 'mousedown' | 'touchstart' = 'mousedown',
  eventListenerOptions: boolean | AddEventListenerOptions = {},
) {
  const latestHandler = useRef(handler)
  latestHandler.current = handler

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | FocusEvent) => {
      const target = event.target as Node

      if (!target || !target.isConnected) {
        return
      }

      const outside = ref.current && !ref.current.contains(target)

      if (!outside) {
        return
      }

      latestHandler.current(event)
    }

    window.addEventListener(eventType, listener, eventListenerOptions)

    return () => {
      window.removeEventListener(eventType, listener, eventListenerOptions)
    }
  }, [ref, eventType, eventListenerOptions])
}
```

На странице 51 параметр назван `eventOptions`, а в Solution на странице 52 — `eventListenerOptions`; в примере выше сохранено имя из Solution.

Адаптация для sandbox: тип `ref` допускает `null`, чтобы соответствовать типам ref в текущей версии React, а исходный `export default` заменён на named export `export function useClickOutside` для структуры sandbox. Подход и остальная логика исходного Solution сохранены.
