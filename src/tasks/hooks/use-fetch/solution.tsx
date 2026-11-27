import { useState, useEffect } from 'react'

function useFetch<T>(url: string) {
  type Result = { url: string; data: T | null; error: string | null }
  const [result, setResult] = useState<Result | null>(null)
  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) throw new Error(response.statusText)
        const data: T = await response.json()
        if (!controller.signal.aborted) setResult({ url, data, error: null })
      } catch (reason) {
        if (!controller.signal.aborted)
          setResult({
            url,
            data: null,
            error: reason instanceof Error ? reason.message : String(reason),
          })
      }
    }
    load()
    return () => controller.abort()
  }, [url])
  return result?.url === url
    ? { ...result, loading: false }
    : { loading: true, data: null, error: null }
}
const examples = [
  {
    name: 'Первый запрос',
    url: 'data:application/json,%7B%22name%22%3A%22Anna%22%7D',
  },
  {
    name: 'Другой URL',
    url: 'data:application/json,%7B%22name%22%3A%22Max%22%7D',
  },
  { name: 'Ошибка JSON', url: 'data:application/json,invalid' },
]

export function UseFetchTask() {
  const [url, setUrl] = useState(examples[0].url)
  const { data, loading, error } = useFetch<{ name: string }>(url)
  return (
    <section>
      {examples.map((example) => (
        <button key={example.name} onClick={() => setUrl(example.url)}>
          {example.name}
        </button>
      ))}
      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      {data && <p>{data.name}</p>}
    </section>
  )
}
