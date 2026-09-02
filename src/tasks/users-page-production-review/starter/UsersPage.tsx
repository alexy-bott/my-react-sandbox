import {useState, useEffect} from 'react'

function UsersPage() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<any[]>([])

  useEffect(() => {
    setLoading(true)

    fetch('/api/users')
      .then((r) => r.json())
      .then((data) => {
        setUsers(data)
        setFilteredUsers(data)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      ),
    )
  }, [search, users])

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <div>Loading...</div>}

      {filteredUsers.map((user) => (
        <div key={Math.random()}>
          {user.name}
        </div>
      ))}
    </>
  )
}

export default UsersPage
