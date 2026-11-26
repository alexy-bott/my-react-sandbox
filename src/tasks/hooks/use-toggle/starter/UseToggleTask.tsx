import type {Dispatch, SetStateAction} from 'react'

// Контракт: состояние, переключатель и setter из useState.
// Dispatch<SetStateAction<boolean>> принимает boolean или функцию (prev: boolean) => boolean.
// readonly запрещает менять элементы кортежа по индексам.
type ToggleResult = readonly [
  value: boolean,
  toggle: () => void,
  setValue: Dispatch<SetStateAction<boolean>>,
]

// Твоё решение: добавь defaultValue и реализуй хук по условию.
// Замени throw своим кодом: пока хук не реализован, песочница показывает сообщение ошибки.
function useToggle(): ToggleResult {
  throw new Error('Реализуй useToggle в файле UseToggleTask.tsx')
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
