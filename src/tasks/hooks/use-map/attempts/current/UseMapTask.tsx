import {Fragment} from 'react'
import {useMap} from './useMap'

export function UseMapTask() {
  const {map, set, setAll, reset, remove} = useMap<string, string>([['key', '🆕']])

  return (
    <div className="task-card">
      <button type="button" onClick={() => set(String(Date.now()), '📦')}>
        Add
      </button>{' '}
      <button
        type="button"
        onClick={() =>
          setAll([
            ['hello', '👋'],
            ['data', '📦'],
          ])
        }
      >
        Set new data
      </button>{' '}
      <button type="button" onClick={reset}>
        Reset
      </button>{' '}
      <button type="button" onClick={() => remove('hello')} disabled={!map.has('hello')}>
        Remove &quot;hello&quot;
      </button>

      <pre>
        Map (
        {Array.from(map.entries()).map(([key, value]) => (
          <Fragment key={key}>{`\n ${key}: ${value}`}</Fragment>
        ))}
        {'\n'})
      </pre>
    </div>
  )
}
