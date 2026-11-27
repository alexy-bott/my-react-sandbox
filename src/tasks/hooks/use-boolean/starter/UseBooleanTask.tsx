type UseBooleanReturn = {
  value: boolean
  setTrue: () => void
  setFalse: () => void
}

// Твоё решение: реализуй состояние и методы по условию.
function useBoolean(_initialValue = false): UseBooleanReturn {
  throw new Error('Реализуй useBoolean')
}

// Готовый интерфейс проверки использует результат твоего хука.
export function UseBooleanTask() {
  const {value, setTrue, setFalse} = useBoolean()

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
