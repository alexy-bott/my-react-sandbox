import { useState, useCallback } from 'react'
type UseBooleanReturn = {
  value: boolean
  setTrue: () => void
  setFalse: () => void
}

function useBoolean(initialValue = false): UseBooleanReturn {
  const [value, setValue] = useState(initialValue)
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  return { value, setTrue, setFalse }
}

// Готовый интерфейс проверки использует результат твоего хука.
export function UseBooleanTask() {
  const { value, setTrue, setFalse } = useBoolean()

  return (
    <div className="task-card">
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button type="button" onClick={setTrue}>
        Set true
      </button>{' '}
      <button type="button" onClick={setFalse}>
        Set false
      </button>
    </div>
  )
}
