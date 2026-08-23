import {useEffect, useMemo, useRef, useState} from 'react'
import './App.css'
import {tasks} from './tasks'

const ACTIVE_TASK_STORAGE_KEY = 'active-task-id'

function App() {
  const [search, setSearch] = useState('')
  const [activeTaskId, setActiveTaskId] = useState(() => {
    return localStorage.getItem(ACTIVE_TASK_STORAGE_KEY) ?? tasks[0]?.id ?? ''
  })
  const activeTaskElementRef = useRef<HTMLButtonElement>(null)

  const activeTask = useMemo(() => {
    return tasks.find((task) => task.id === activeTaskId) ?? tasks[0]
  }, [activeTaskId])

  useEffect(() => {
    if (activeTask) {
      localStorage.setItem(ACTIVE_TASK_STORAGE_KEY, activeTask.id)
    }
  }, [activeTask])

  useEffect(() => {
    activeTaskElementRef.current?.scrollIntoView({block: 'nearest'})
  }, [activeTask])

  const normalizedSearch = search.trim().toLowerCase()
  const visibleTasks = normalizedSearch
    ? tasks.filter((task) => task.title.toLowerCase().includes(normalizedSearch))
    : tasks

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

        <input
          aria-label="Найти задачу"
          className="task-search"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Найти задачу..."
          type="search"
          value={search}
        />

        <nav className="task-list" aria-label="Список заданий">
          {visibleTasks.length > 0 ? (
            visibleTasks.map((task) => (
              <button
                className={task.id === activeTask.id ? 'task-button active' : 'task-button'}
                key={task.id}
                onClick={() => setActiveTaskId(task.id)}
                ref={task.id === activeTask.id ? activeTaskElementRef : undefined}
                title={task.title}
                type="button"
              >
                {task.title}
              </button>
            ))
          ) : (
            <p>Задачи не найдены</p>
          )}
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
