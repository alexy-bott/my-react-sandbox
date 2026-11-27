import { useEffect, useState } from 'react'
const key = 'cross-tab-input-sync.text'
export function CrossTabInputSyncTask() {
  const [text, setText] = useState(() => localStorage.getItem(key) ?? '')
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === key) setText(event.newValue ?? '')
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])
  return (
    <input
      value={text}
      onChange={(event) => {
        setText(event.target.value)
        localStorage.setItem(key, event.target.value)
      }}
    />
  )
}
