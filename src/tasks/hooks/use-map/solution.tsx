import { useState } from 'react'
import { Fragment } from 'react'

// K — тип ключа, V — тип значения. Входом может быть Map или массив пар.
type MapInput<K, V> = Map<K, V> | Array<[K, V]>
type MapResult<K, V> = {
  map: Map<K, V>
  set: (key: K, value: V) => void
  setAll: (entries: MapInput<K, V>) => void
  remove: (key: K) => void
  reset: () => void
}

function useMap<K, V>(defaultValue: MapInput<K, V>): MapResult<K, V> {
  const [map, update] = useState(() => new Map(defaultValue))
  return {
    map,
    set: (key, value) =>
      update((previous) => new Map(previous).set(key, value)),
    setAll: (entries) => update(new Map(entries)),
    remove: (key) =>
      update((previous) => {
        const next = new Map(previous)
        next.delete(key)
        return next
      }),
    reset: () => update(new Map()),
  }
}

// Готовый интерфейс проверки использует результат твоего хука.
export function UseMapTask() {
  const { map, set, setAll, reset, remove } = useMap<string, string>([
    ['key', '🆕'],
  ])

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
      <button
        type="button"
        onClick={() => remove('hello')}
        disabled={!map.has('hello')}
      >
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
