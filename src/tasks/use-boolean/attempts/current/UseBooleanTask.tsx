import {useBoolean} from './useBoolean'

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
