# Solution из источника

Источник хранит актуальный callback в `useRef`. Один effect обновляет ref при изменении callback. Второй effect создаёт interval для заданного `delay`, вызывает функцию из ref и очищает interval в cleanup. Если `delay` равен `null`, effect не создаёт interval.

```ts
import {useEffect, useRef} from 'react'

export default function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay === null) return

    const id = setInterval(() => {
      savedCallback.current()
    }, delay)

    return () => {
      clearInterval(id)
    }
  }, [delay])
}
```

Уточнение автора песочницы: исходный `useEffect` для синхронизации ref может выполниться позже commit, поэтому ближайший тик теоретически может прочитать старый callback. Для контракта этого упражнения синхронизируй ref в `useLayoutEffect`, либо используй `useEffectEvent` (доступен в React 19.2) для вызова актуального callback из таймера. Не добавляй callback в зависимости эффекта, создающего интервал, если это приводит к его перезапуску.
