import {initialUsers} from './initialUsers'

function UserList() {

  return <p>Пользователей: {initialUsers.length}</p>
}

export function UserListAdvancedTask() {
  return (
    <div className="task-card">
      <UserList />
    </div>
  )
}
