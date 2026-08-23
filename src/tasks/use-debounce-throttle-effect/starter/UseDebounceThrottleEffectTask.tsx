import {useState} from 'react'
import {useDebounceEffect, useThrottleEffect} from './useTimedEffects'

function DebouncedSearch() {
  const [query, setQuery] = useState('')

  useDebounceEffect(() => {
    console.log('Search:', query)
  }, [query], 400)

  return (
    <input
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search"
    />
  )
}

function ThrottledLogger({value}: {value: string}) {
  useThrottleEffect(() => {
    console.log('Throttled:', value)
  }, [value], 1000)

  return null
}

export function UseDebounceThrottleEffectTask() {
  return (
    <div className="task-card">
      <DebouncedSearch />
      <ThrottledLogger value="" />
    </div>
  )
}
