import { useEffect, useState } from 'react'
function getPeople(name: string, page = 1, options: RequestInit = {}) {
  return fetch(
    `https://rickandmortyapi.com/api/character?name=${name}&page=${page}`,
    options,
  ).then((response) => {
    if (!response.ok) throw new Error('Ошибка запроса: ' + response.status)
    return response.json()
  })
}

function RickMortySearch() {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState<Array<{ name: string; id: number }>>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (!query.trim()) {
      setItems([])
      setLoading(false)
      setError('')
      return
    }
    const controller = new AbortController()
    setLoading(true)
    setError('')
    getPeople(encodeURIComponent(query), 1, { signal: controller.signal })
      .then((data) => {
        if (!controller.signal.aborted) setItems(data.results)
      })
      .catch((reason: Error) => {
        if (!controller.signal.aborted) setError(reason.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })
    return () => controller.abort()
  }, [query])
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {loading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function RickMortySearchTask() {
  return (
    <div className="task-card">
      <RickMortySearch />
    </div>
  )
}
