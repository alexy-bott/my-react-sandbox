# Solution из источника

Источник использует ref, чтобы запомнить запуск effect, и возвращает его cleanup-функцию из `useEffect`.

```ts
import {useEffect, useRef, type EffectCallback} from 'react'

export function useEffectOnce(effect: EffectCallback): void {
  const effectCalled = useRef(false)

  useEffect(() => {
    if (effectCalled.current) {
      return
    }

    effectCalled.current = true
    return effect()
  }, [])
}
```

Простая реализация `useEffect(effect, [])` выполняет effect один раз за обычное монтирование, но React Strict Mode в разработке намеренно повторяет цикл эффекта. Ref-guard из Solution предотвращает второй запуск в пределах одного экземпляра компонента, но не сохраняется после настоящего размонтирования и нового монтирования.
