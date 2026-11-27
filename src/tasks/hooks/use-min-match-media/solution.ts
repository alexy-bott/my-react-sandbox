import { useState, useEffect, useRef, useLayoutEffect } from 'react'
export interface MediaDimensions {
  width: number
  height: number
}
export function useMinMatchMedia(
  { width, height }: MediaDimensions,
  callback?: () => void,
) {
  const query = `(min-width: ${width}px) and (min-height: ${height}px)`
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  const previous = useRef(matches)
  const notify = useRef(callback)
  useLayoutEffect(() => {
    notify.current = callback
  }, [callback])
  useEffect(() => {
    const media = window.matchMedia(query)
    function update() {
      if (previous.current === media.matches) return
      previous.current = media.matches
      setMatches(media.matches)
      notify.current?.()
    }
    media.addEventListener('change', update)
    update()
    return () => media.removeEventListener('change', update)
  }, [query])
  return matches
}
