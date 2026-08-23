import {useStateWithReset} from './useStateWithReset'

export function UseStateWithResetTask() {
  const [value, setValue, resetValue] = useStateWithReset(10)

  return (
    <div className="task-card">
      <div>Value: {value}</div>
      <input
        type="number"
        value={value ?? ''}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <button type="button" onClick={resetValue}>
        reset
      </button>
    </div>
  )
}
