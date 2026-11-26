import type {RefObject} from 'react'

// T — тип HTML-элемента. До подключения и после отключения ref.current равен null.
function useFocus<T extends HTMLElement>(): [RefObject<T | null>, () => void] {
  // Реализуй хук вместо этой заглушки.
  throw new Error('Реализуй useFocus')
}

// Готовый интерфейс проверки использует результат твоего хука.
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
