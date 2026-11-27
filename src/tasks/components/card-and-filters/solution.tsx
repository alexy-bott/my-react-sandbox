import { useEffect, useState } from 'react'
type Row = { id: number | string; title: string; description: string }
const URL = 'https://chmocki.ru/api/mock/z6WlPjFH/filters-react-dan'
function Card({ row, remove }: { row: Row; remove: () => void }) {
  return (
    <article>
      <h2>{row.title}</h2>
      <p>{row.description}</p>
      <button onClick={remove}>Удалить</button>
    </article>
  )
}
export default function CardWildberies() {
  const [rows, setRows] = useState<Row[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('')
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState(0)
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
  const visible = rows.filter((row) => {
    const digits = String(row.id).match(/\d+/)?.[0]
    const parityMatches =
      !mode || (digits !== undefined && Number(digits) % 2 === mode - 1)
    return (
      parityMatches &&
      [row.title, row.description].some((s) => s.toLowerCase().includes(query))
    )
  })
  return (
    <section>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setQuery(text.trim().toLowerCase())}>Найти</button>
      <button onClick={() => setMode((mode + 1) % 3)}>
        {['Показать чётные', 'Показать нечётные', 'Сбросить фильтр'][mode]}
      </button>
      {visible.length === 0 && <p>Список пуст</p>}
      {visible.map((row) => (
        <Card
          key={row.id}
          row={row}
          remove={() => setRows(rows.filter((item) => item.id !== row.id))}
        />
      ))}
    </section>
  )
}
