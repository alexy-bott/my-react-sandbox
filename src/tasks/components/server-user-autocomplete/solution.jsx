import React from 'react'

const USERS = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'David Wilson' },
  { id: 5, name: 'Emma Willy' },
]

const fetchUsers = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalized = query.toLowerCase().trim()

      resolve(
        USERS.filter((user) => user.name.toLowerCase().includes(normalized)),
      )
    }, 1000)
  })
}

const Autocomplete = () => {
  const [query, setQuery] = React.useState('')
  const [selected, setSelected] = React.useState(null)
  const [items, setItems] = React.useState([])
  const [status, setStatus] = React.useState('idle')
  React.useEffect(() => {
    if (!query.trim() || selected) {
      setStatus('idle')
      setItems([])
      return
    }
    let active = true
    setStatus('loading')
    fetchUsers(query)
      .then((users) => {
        if (active) {
          setItems(users)
          setStatus('done')
        }
      })
      .catch(() => {
        if (active) setStatus('error')
      })
    return () => {
      active = false
    }
  }, [query, selected])
  return (
    <div>
      <input
        value={query}
        onChange={(e) => {
          setSelected(null)
          setQuery(e.target.value)
        }}
      />
      {selected && (
        <p>
          Selected: {selected.name} (ID: {selected.id})
        </p>
      )}
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'error' && <p>Ошибка поиска</p>}
      {status === 'done' &&
        (items.length ? (
          <ul>
            {items.map((user) => (
              <li key={user.id}>
                <button
                  onClick={() => {
                    setSelected(user)
                    setQuery(user.name)
                  }}
                >
                  {user.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Никого не найдено</p>
        ))}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <h2>User search</h2>
      <Autocomplete />
    </div>
  )
}
