// T — тип состояния. Порядок элементов кортежа нужен готовому интерфейсу.
type StateHistoryTuple<T> = [
  state: T,
  setState: (value: T) => void,
  goBack: () => void,
  goForward: () => void,
  history: T[],
]

function useStateWithHistory<T>(initialState: T): StateHistoryTuple<T> {
  // void временно отмечает аргумент использованным.
  // Замени обе строки рабочим кодом.
  void initialState
  throw new Error('Реализуй useStateWithHistory')
}

// Готовый интерфейс проверки использует результат твоего хука.
export function StateHistoryTask() {
  const [state, setState, goBack, goForward, history] = useStateWithHistory('first')

  return (
    <div className="task-card">
      <p>Current: {state}</p>
      <p>History: {history.join(' → ')}</p>
      <button type="button" onClick={() => setState('second')}>
        Set second
      </button>{' '}
      <button type="button" onClick={() => setState('third')}>
        Set third
      </button>{' '}
      <button type="button" onClick={goBack}>
        Back
      </button>{' '}
      <button type="button" onClick={goForward}>
        Forward
      </button>
    </div>
  )
}
