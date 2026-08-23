import {useState} from 'react'
import {useDebounceEffect, useThrottleEffect} from './useTimedEffects'

function DebouncedSearch() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useDebounceEffect(() => {
    console.log('Search:', query)
    setDebouncedQuery(query)
  }, [query], 400)

  return (
    <section>
      <h3>Debounce</h3>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search"
      />
      <p>Raw value: {query || '—'}</p>
      <p>Debounced value: {debouncedQuery || '—'}</p>
    </section>
  )
}

function ThrottledLogger() {
  const [value, setValue] = useState('')
  const [throttledValue, setThrottledValue] = useState('')

  useThrottleEffect(() => {
    console.log('Throttled:', value)
    setThrottledValue(value)
  }, [value], 1000)

  return (
    <section>
      <h3>Throttle</h3>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Throttle value"
      />
      <p>Raw value: {value || '—'}</p>
      <p>Throttled value: {throttledValue || '—'}</p>
    </section>
  )
}

export function UseDebounceThrottleEffectTask() {
  return (
    <div className="task-card">
      <DebouncedSearch />
      <ThrottledLogger />
    </div>
  )
}
