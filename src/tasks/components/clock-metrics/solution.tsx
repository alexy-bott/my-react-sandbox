import { useEffect, useLayoutEffect, useRef, useState } from 'react'
function logMetric(date: string) {
  fetch('/api/metric', { method: 'POST', body: date }).catch(console.error)
}
export function ClockMetricsTask() {
  const [time, setTime] = useState(() => new Date().toISOString())
  const lastShown = useRef(time)
  useLayoutEffect(() => {
    lastShown.current = time
  }, [time])
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toISOString()), 1000)
    return () => {
      clearInterval(timer)
      logMetric(lastShown.current)
    }
  }, [])
  return <h1>{time}</h1>
}
