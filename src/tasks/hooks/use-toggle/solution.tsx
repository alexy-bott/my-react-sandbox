import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

// Контракт: состояние, переключатель и setter из useState.
// Dispatch<SetStateAction<boolean>> принимает boolean или функцию (prev: boolean) => boolean.
// readonly запрещает менять элементы кортежа по индексам.
type ToggleResult = readonly [
  value: boolean,
  toggle: () => void,
  setValue: Dispatch<SetStateAction<boolean>>,
]

function useToggle(defaultValue = false): ToggleResult {
  const [value, setValue] = useState(defaultValue)
  return [value, () => setValue((previous) => !previous), setValue]
}

// Готовый интерфейс проверки: использует результат твоего хука.
export function UseToggleTask() {
  const [value, toggle, setValue] = useToggle()

  return (
    <div className="task-card">
      <p>Enabled: {value ? 'On' : 'Off'}</p>
      <button type="button" onClick={toggle}>
        Toggle
      </button>{' '}
      <button type="button" onClick={() => setValue(true)}>
        Enable
      </button>{' '}
      <button type="button" onClick={() => setValue(false)}>
        Disable
      </button>
    </div>
  )
}
