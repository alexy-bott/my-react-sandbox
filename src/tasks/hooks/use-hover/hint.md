# Solution из источника

Источник хранит состояние наведения через `useState`, предыдущий DOM-узел через `useRef` и создаёт callback-ref, который переносит обработчики между элементами.

```ts
import {useCallback, useRef, useState, type RefCallback} from 'react'

export default function useHover<T extends Element>(): [RefCallback<T>, boolean] {
  const [hovering, setHovering] = useState(false)
  const previous = useRef<T | null>(null)
  const handleMouseEnter = useCallback(() => setHovering(true), [])
  const handleMouseLeave = useCallback(() => setHovering(false), [])

  const customRef: RefCallback<T> = useCallback(
    (node) => {
      if (previous.current?.nodeType === Node.ELEMENT_NODE) {
        previous.current.removeEventListener('mouseenter', handleMouseEnter)
        previous.current.removeEventListener('mouseleave', handleMouseLeave)
      }

      if (node?.nodeType === Node.ELEMENT_NODE) {
        node.addEventListener('mouseenter', handleMouseEnter)
        node.addEventListener('mouseleave', handleMouseLeave)
      }

      previous.current = node
    },
    [handleMouseEnter, handleMouseLeave],
  )

  return [customRef, hovering]
}
```

Уточнение автора песочницы: если узел отключён, пока указатель находится над ним, одного удаления обработчиков недостаточно — состояние наведения должно сброситься. В React 19 callback-ref может также возвращать cleanup-функцию. Если callback-ref возвращает cleanup-функцию, React вызывает её при отключении вместо передачи `null`. Без cleanup-функции можно обрабатывать `null`. Стабильная ссылка на callback-ref позволяет избежать повторного отключения и подключения ref при обычных рендерах.
