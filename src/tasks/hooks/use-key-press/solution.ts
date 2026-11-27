import { useEffect } from 'react'
type KeyPressOptions = { target?: EventTarget; event?: 'keydown' | 'keyup' }
export function useKeyPress(
  key: string,
  callback: (event: KeyboardEvent) => void,
  { target = window, event = 'keydown' }: KeyPressOptions = {},
) {
  useEffect(() => {
    const handleKey = (value: Event) => {
      if (value instanceof KeyboardEvent && value.key === key) callback(value)
    }
    target.addEventListener(event, handleKey)
    return () => target.removeEventListener(event, handleKey)
  }, [key, callback, target, event])
}
