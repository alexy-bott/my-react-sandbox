import { useState } from 'react'
const users = [
  { id: 1, name: 'Creola Katherine Johnson', profession: 'Mathematician' },
  { id: 2, name: 'Mario José Molina-Pasquel Henríquez', profession: 'Chemist' },
  { id: 3, name: 'Mohammad Abdus Salam', profession: 'Physicist' },
  { id: 4, name: 'Percy Lavon Julian', profession: 'Chemist' },
  { id: 5, name: 'Katherine Johnson', profession: 'Programmer' },
  { id: 6, name: 'Jane Johnson', profession: 'Astronaut' },
  { id: 7, name: 'Cael Thas', profession: 'Manager' },
]

export function UserList() {
  const [filtered, setFiltered] = useState(false)
  const visible = filtered
    ? users.filter((user) => user.profession === 'Chemist')
    : users
  return (
    <div>
      <button onClick={() => setFiltered(true)}>Показать только химиков</button>
      <button onClick={() => setFiltered(false)}>Сбросить</button>
      <ul>
        {visible.map((user) => (
          <li key={user.id}>
            {user.name}: {user.profession}
          </li>
        ))}
      </ul>
    </div>
  )
}
