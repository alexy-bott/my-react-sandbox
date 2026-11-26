import {useStateWithHistory} from './useStateWithHistory'

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
