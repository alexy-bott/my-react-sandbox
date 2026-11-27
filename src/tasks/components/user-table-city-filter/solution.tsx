import { useEffect, useState } from 'react'
type Row = {
  id: number
  name: string
  email: string
  address: { city: string }
}
const URL = 'https://jsonplaceholder.typicode.com/users'
export function UserTableCityFilterTask() {
  const [rows, setRows] = useState<Row[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('')
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
    <section>
      <h1>Список пользователей</h1>
      <label>
        Фильтр по городу{' '}
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Все</option>
          {[...new Set(rows.map((row) => row.address.city))].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <table>
        <thead>
          <tr>
            {['ID', 'Имя', 'Email', 'Город'].map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows
            .filter((row) => !city || row.address.city === city)
            .map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.address.city}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  )
}
