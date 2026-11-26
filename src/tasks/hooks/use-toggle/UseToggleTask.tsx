import type {Dispatch, SetStateAction} from 'react'

// Контракт хука: состояние, переключатель и setter.
// Setter, как в useState, принимает значение или функцию обновления.
type ToggleResult = readonly [
  value: boolean,
  toggle: () => void,
  setValue: Dispatch<SetStateAction<boolean>>,
]

// Твоё решение: добавь параметр и реализуй хук по условию.
// throw — временная заглушка: песочница показывает её сообщение вместо UI.
// Удали эту строку, когда будешь писать реализацию.
function useToggle(): ToggleResult {
  throw new Error('Реализуй useToggle в файле UseToggleTask.tsx')
}

// Готовый интерфейс для проверки: кнопки вызывают функции твоего хука.
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
