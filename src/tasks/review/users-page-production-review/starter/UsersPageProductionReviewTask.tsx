import ReviewApp from './App'
import UsersPage from './UsersPage'

void [ReviewApp, UsersPage]

export function UsersPageProductionReviewTask() {
  return (
    <div className="task-card">
      <p className="task-note">
        Проведи production-like review файлов UsersPage.tsx и App.tsx.
      </p>
    </div>
  )
}
