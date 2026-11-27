import { useState, useRef } from 'react'
import type { Dispatch, SetStateAction } from 'react'

// T — тип состояния. Аргумент может быть значением или initializer-функцией.
// Setter принимает новое значение или функцию от предыдущего состояния.
function useStateWithReset<T>(
  initialValue: T | (() => T),
): readonly [T, Dispatch<SetStateAction<T>>, () => void] {
  const [value, setValue] = useState(initialValue)
  const initial = useRef(value)
  return [value, setValue, () => setValue(() => initial.current)]
}

// Готовый интерфейс проверки использует результат твоего хука.
export function UseStateWithResetTask() {
  const [value, setValue, resetValue] = useStateWithReset(10)

  return (
    <div className="task-card">
      <div>Value: {value}</div>
      <input
        type="number"
        value={value ?? ''}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <button type="button" onClick={resetValue}>
        reset
      </button>
    </div>
  )
}
