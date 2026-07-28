import {useEffect, useMemo, useState} from 'react'
import './App.css'
import {tasks} from './tasks'

const ACTIVE_TASK_STORAGE_KEY = 'active-task-id'

function App() {
  const [activeTaskId, setActiveTaskId] = useState(() => {
    return localStorage.getItem(ACTIVE_TASK_STORAGE_KEY) ?? tasks[0]?.id ?? ''
  })

  const activeTask = useMemo(() => {
    return tasks.find((task) => task.id === activeTaskId) ?? tasks[0]
  }, [activeTaskId])

  useEffect(() => {
    if (activeTask) {
      localStorage.setItem(ACTIVE_TASK_STORAGE_KEY, activeTask.id)
    }
  }, [activeTask])

  if (!activeTask) {
    return <main className="app-empty">Добавь первое задание в src/tasks/index.ts</main>
  }

  const ActiveTaskComponent = activeTask.component

  return (
    <main className="app">
      <aside className="app-sidebar">
        <div>
          <h1>React tasks</h1>
          <p>Выбери задачу для тренировки</p>
        </div>

        <nav className="task-list" aria-label="Список заданий">
          {tasks.map((task) => (
            <button
              className={task.id === activeTask.id ? 'task-button active' : 'task-button'}
              key={task.id}
              onClick={() => setActiveTaskId(task.id)}
              type="button"
            >
              {task.title}
            </button>
          ))}
        </nav>
      </aside>

      <section className="task-workspace">
        <header className="task-header">
          <span>Активное задание</span>
          <h2>{activeTask.title}</h2>
        </header>

        <div className="task-content">
          <ActiveTaskComponent />
        </div>
      </section>
    </main>
  )
}

export default App
