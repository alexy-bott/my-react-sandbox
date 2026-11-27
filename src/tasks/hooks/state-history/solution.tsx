import { useState } from 'react'
// T — тип состояния. Порядок элементов кортежа нужен готовому интерфейсу.
type StateHistoryTuple<T> = [
  state: T,
  setState: (value: T) => void,
  goBack: () => void,
  goForward: () => void,
  history: T[],
]

function useStateWithHistory<T>(initialState: T): StateHistoryTuple<T> {
  const [snapshot, setSnapshot] = useState({
    entries: [initialState],
    index: 0,
  })
  return [
    snapshot.entries[snapshot.index],
    (value) =>
      setSnapshot(({ entries, index }) => ({
        entries: [...entries.slice(0, index + 1), value],
        index: index + 1,
      })),
    () => setSnapshot((s) => ({ ...s, index: Math.max(0, s.index - 1) })),
    () =>
      setSnapshot((s) => ({
        ...s,
        index: Math.min(s.entries.length - 1, s.index + 1),
      })),
    snapshot.entries,
  ]
}

// Готовый интерфейс проверки использует результат твоего хука.
export function StateHistoryTask() {
  const [state, setState, goBack, goForward, history] =
    useStateWithHistory('first')

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
