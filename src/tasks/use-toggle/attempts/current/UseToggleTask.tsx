import {useToggle} from './useToggle'

export function UseToggleTask() {
  const [value, toggle, setValue] = useToggle()

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
