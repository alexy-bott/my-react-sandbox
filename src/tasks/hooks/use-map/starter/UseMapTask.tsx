import {Fragment} from 'react'

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
  // void временно отмечает аргумент использованным.
  // Замени обе строки рабочим кодом.
  void defaultValue
  throw new Error('Реализуй useMap')
}

// Готовый интерфейс проверки использует результат твоего хука.
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
