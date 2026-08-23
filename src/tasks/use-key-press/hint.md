# Пример решения из источника

В исходном материале hook реализован так:

```ts
import {useEffect} from 'react'

type KeyPressOptions = {
  event?: 'keydown' | 'keyup'
  target?: EventTarget
}

export function useKeyPress(
  key: string,
  callback: (event: KeyboardEvent) => void,
  {event = 'keydown', target = window}: KeyPressOptions = {
    event: 'keydown',
    target: window,
  },
) {
  return useEffect(() => {
    const handler = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key !== key) {
        return
      }

      callback(keyboardEvent)
    }

    target.addEventListener(event, handler as EventListener)

    return () => {
      target.removeEventListener(event, handler as EventListener)
    }
  }, [key, callback, event, target])
}
```

Адаптация для sandbox: исходный `export default` заменён на named export `export function useKeyPress`, а тип параметров вынесен в `KeyPressOptions`. Логика исходного Solution сохранена.
