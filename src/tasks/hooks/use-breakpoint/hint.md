# Пример решения из источника

В исходном материале hook реализован через хранение ширины окна, подписку на `resize`, сортировку порогов и выбор последнего подходящего breakpoint:

```ts
import {useEffect, useMemo, useState} from 'react'

type BreakpointName<T> = Extract<keyof T, string>

export function createBreakpoint<T extends Record<string, number>>(
  breakpoints: T,
): () => BreakpointName<T> {
  return function useBreakpoint(): BreakpointName<T> {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      function resize() {
        setWidth(window.innerWidth)
      }

      resize()
      window.addEventListener('resize', resize)

      return () => {
        window.removeEventListener('resize', resize)
      }
    }, [])

    const sortedBreakpoints = useMemo(
      () => Object.entries(breakpoints).sort((a, b) => a[1] - b[1]),
      [breakpoints],
    )

    return useMemo(
      () =>
        sortedBreakpoints.reduce(
          (current, [name, minimumWidth]) => (width >= minimumWidth ? name : current),
          sortedBreakpoints[0][0],
        ) as BreakpointName<T>,
      [sortedBreakpoints, width],
    )
  }
}
```

Исходный Solution предполагает, что объект `breakpoints` не пуст и содержит базовый минимальный порог.

Адаптация для sandbox: исходный `export default` заменён на named export, а возвращаемый `keyof T` ограничен строковыми ключами через `Extract<keyof T, string>`. Алгоритм исходного Solution сохранён.
