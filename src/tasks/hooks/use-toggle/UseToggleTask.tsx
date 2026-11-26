import type {Dispatch, SetStateAction} from 'react'
import {useToggle as useStudentToggle} from './useToggle'

type ToggleResult = readonly [boolean, () => void, Dispatch<SetStateAction<boolean>>]
const useToggle: (defaultValue?: boolean) => ToggleResult | void = useStudentToggle

export function UseToggleTask() {
  const result = useToggle()

  if (result === undefined) {
    return <p>Реализуй useToggle в файле useToggle.ts. Когда хук вернёт результат, здесь появятся кнопки проверки.</p>
  }

  const [value, toggle, setValue] = result

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
