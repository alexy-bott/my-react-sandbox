# Solution из источника

Источник предлагает создать ref через `useRef`, а функцию фокусировки обернуть в `useCallback`. В Solution вызов `focus` дополнительно откладывается до следующей отрисовки браузера через `requestAnimationFrame`.

```ts
import {useCallback, useRef, type RefObject} from 'react'

export default function useFocus<T extends HTMLElement>(): [
  RefObject<T>,
  () => void,
] {
  const ref = useRef<T>(null)
  const focusElement = useCallback(() => {
    requestAnimationFrame(() => {
      ref.current?.focus()
    })
  }, [])

  return [ref, focusElement]
}
```
