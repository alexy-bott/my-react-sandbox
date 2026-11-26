# Solution из источника

## Подход с useState

Источник предлагает хранить текущее и предыдущее значения в двух состояниях и обновлять их во время рендера при изменении аргумента:

```ts
import {useState} from 'react'

export default function usePrevious<T>(state: T) {
  const [current, setCurrent] = useState(state)
  const [previous, setPrevious] = useState<T>()

  if (current !== state) {
    setPrevious(current)
    setCurrent(state)
  }

  return previous
}
```

## Подход с useRef

Второй доступный вариант сохраняет значение после завершённого рендера:

```ts
import {useEffect, useRef} from 'react'

export default function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = state
  })

  return ref.current
}
```

Дальнейшее пояснение второго подхода в PDF обрезано, поэтому здесь оно не восстановлено.
