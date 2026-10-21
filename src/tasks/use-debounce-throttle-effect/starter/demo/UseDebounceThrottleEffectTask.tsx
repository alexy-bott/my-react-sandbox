// Готовый UI для проверки: студент редактирует только ../useTimedEffects.ts.
import {useState} from 'react'
import {useDebounceEffect, useThrottleEffect} from '../useTimedEffects'

function DebouncedSearch() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useDebounceEffect(() => {
    console.log('Search:', query)
    setDebouncedQuery(query)

    return () => {
      console.log('Debounce effect cleanup:', query)
    }
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

type ThrottleStats = {
  runs: number
  lastAt: number | null
  intervalMs: number | null
}

function ThrottledLogger() {
  const [value, setValue] = useState('')
  const [throttledValue, setThrottledValue] = useState('')
  const [stats, setStats] = useState<ThrottleStats>({
    runs: 0,
    lastAt: null,
    intervalMs: null,
  })

  useThrottleEffect(() => {
    const now = performance.now()
    console.log('Throttled:', value)
    setThrottledValue(value)
    setStats((previous) => ({
      runs: previous.runs + 1,
      lastAt: now,
      intervalMs: previous.lastAt === null ? null : Math.round(now - previous.lastAt),
    }))

    return () => {
      console.log('Throttle effect cleanup:', value)
    }
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
      <p>Запусков эффекта: {stats.runs}</p>
      <p>
        Последний запуск: {stats.lastAt === null ? '—' : `${Math.round(stats.lastAt)} мс от загрузки страницы`}
      </p>
      <p>
        Интервал между запусками: {stats.intervalMs === null ? '—' : `${stats.intervalMs} мс`}
      </p>
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
