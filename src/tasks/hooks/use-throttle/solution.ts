import { useState, useEffect, useRef } from 'react'
export function useThrottle<T>(value: T, interval = 500): T {
  const [result, setResult] = useState(() => value)
  const last = useRef(Date.now())
  useEffect(() => {
    if (Object.is(value, result)) return
    const wait = Math.max(0, interval - (Date.now() - last.current))
    const publish = () => {
      last.current = Date.now()
      setResult(() => value)
    }
    if (!wait) {
      publish()
      return
    }
    const timer = setTimeout(publish, wait)
    return () => clearTimeout(timer)
  }, [value, interval, result])
  return result
}
