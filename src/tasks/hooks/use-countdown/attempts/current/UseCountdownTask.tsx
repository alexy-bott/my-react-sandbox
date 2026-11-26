import {useCountdown} from './useCountdown'

export function UseCountdownTask() {
  const {count, start, stop, reset} = useCountdown({countStart: 10})

  return (
    <div className="task-card">
      <p>Countdown: {count}</p>
      <button type="button" onClick={start}>
        Start
      </button>{' '}
      <button type="button" onClick={stop}>
        Stop
      </button>{' '}
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  )
}
