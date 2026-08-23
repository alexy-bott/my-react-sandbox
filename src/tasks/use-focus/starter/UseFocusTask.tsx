import {useFocus} from './useFocus'

export function UseFocusTask() {
  const [ref, focus] = useFocus<HTMLInputElement>()

  return (
    <div className="task-card">
      <input ref={ref} placeholder="Поле для фокуса" />
      <button type="button" onClick={focus}>
        Установить фокус
      </button>
    </div>
  )
}
