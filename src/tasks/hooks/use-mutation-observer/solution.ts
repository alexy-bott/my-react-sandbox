import { useEffect } from 'react'
export function useMutationObserver(
  target: Node | null,
  callback: MutationCallback,
  options: MutationObserverInit,
) {
  useEffect(() => {
    if (!target) return
    const observer = new MutationObserver(callback)
    observer.observe(target, options)
    return () => observer.disconnect()
  }, [target, callback, options])
}
