import { useEffect, useState } from 'react'
type Row = { id: number; title: string }
const URL = 'https://jsonplaceholder.typicode.com/posts'
export function BaseFetch() {
  const [rows, setRows] = useState<Row[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        const response = await fetch(URL, { signal: controller.signal })
        if (!response.ok) throw new Error('Ошибка запроса: ' + response.status)
        const data: Row[] = await response.json()
        if (!controller.signal.aborted) setRows(data)
      } catch (reason) {
        if (!controller.signal.aborted)
          setError(reason instanceof Error ? reason.message : 'Ошибка загрузки')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [])
  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>
  return (
    <ul>
      {rows.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
