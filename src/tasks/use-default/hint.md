# Пример решения из источника

В исходном материале hook реализован так:

```ts
import {useState} from 'react'

export function useDefault<TStateType>(
  defaultValue: TStateType,
  initialValue: TStateType | (() => TStateType),
) {
  const [value, setValue] = useState<TStateType | undefined | null>(initialValue)

  if (value === undefined || value === null) {
    return [defaultValue, setValue] as const
  }

  return [value, setValue] as const
}
```

Важно проверять именно `null` и `undefined`, а не просто `!value`: `0` и `false` тоже могут быть допустимыми значениями состояния.

Адаптация для sandbox: исходный `export default` заменён на named export `export function useDefault` для структуры задачи. Остальная логика исходного Solution сохранена.
