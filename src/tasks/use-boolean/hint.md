# Solution из источника

Сначала в источнике показан обычный вариант, в котором методы создаются заново при каждом рендере:

```ts
import {useState} from 'react'

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  }
}
```

Этот вариант не выполняет требование стабильности методов. Для оптимизированного варианта источник предлагает мемоизировать их через `useCallback`:

```ts
import {useCallback, useState} from 'react'

type UseBooleanReturn = {
  value: boolean
  setTrue: () => void
  setFalse: () => void
}

export default function useBoolean(initialValue = false): UseBooleanReturn {
  const [value, setValue] = useState(initialValue)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  return {value, setTrue, setFalse}
}
```
