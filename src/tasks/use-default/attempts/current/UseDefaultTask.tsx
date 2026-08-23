import {useDefault} from './useDefault'

type User = {
  name: string
}

export function UseDefaultTask() {
  const initialUser: User = {name: 'Marshall'}
  const defaultUser: User = {name: 'Mathers'}
  const [user, setUser] = useDefault(defaultUser, initialUser)

  return (
    <div className="task-card">
      <div>User: {user.name}</div>
      <input onChange={(event) => setUser({name: event.target.value})} />
      <button type="button" onClick={() => setUser(null)}>
        reset
      </button>
    </div>
  )
}
