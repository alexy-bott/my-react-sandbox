import { useState } from 'react'
import { initialUsers } from './initialUsers'
type User = (typeof initialUsers)[number]
export function UserListAdvancedTask() {
  const [users, setUsers] = useState(initialUsers)
  const [filter, setFilter] = useState('')
  const [name, setName] = useState('')
  const [profession, setProfession] = useState('')
  const [attempted, setAttempted] = useState(false)
  const [field, setField] = useState<keyof User>('name')
  const [sort, setSort] = useState<keyof User | null>(null)
  const fields = (Object.keys(users[0]) as (keyof User)[]).filter(
    (key) => key !== 'id',
  )
  const validName = /^[a-z]{2,40}$/i.test(name)
  const validJob = /^[a-z]{5,100}$/i.test(profession)
  const visible = users.filter((user) => !filter || user.profession === filter)
  if (sort)
    visible.sort((a, b) =>
      String(a[sort]).localeCompare(String(b[sort]), undefined, {
        numeric: true,
      }),
    )
  return (
    <section>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">Все</option>
        {[...new Set(users.map((user) => user.profession))].map((job) => (
          <option key={job}>{job}</option>
        ))}
      </select>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setAttempted(true)
          if (!validName || !validJob) return
          setUsers([
            ...users,
            { id: Math.max(...users.map((u) => u.id)) + 1, name, profession },
          ])
          setName('')
          setProfession('')
          setAttempted(false)
        }}
      >
        <label>
          Имя <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        {attempted && !validName && <span>Введите 2–40 латинских букв</span>}
        <label>
          Профессия{' '}
          <input
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </label>
        {attempted && !validJob && <span>Введите 5–100 латинских букв</span>}
        <button>Создать</button>
      </form>
      <select
        value={field}
        onChange={(e) => setField(e.target.value as keyof User)}
      >
        {fields.map((key) => (
          <option key={key}>{key}</option>
        ))}
      </select>
      <button onClick={() => setSort(field)}>Сортировать</button>
      <ul>
        {visible.map((u) => (
          <li key={u.id}>
            {u.name} — {u.profession}
          </li>
        ))}
      </ul>
    </section>
  )
}
