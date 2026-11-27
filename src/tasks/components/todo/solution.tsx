import { useState } from 'react'
type Todo = { id: string; text: string; done: boolean }
export function TodoTask() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (!text.trim()) return
          setTodos([...todos, { id: crypto.randomUUID(), text, done: false }])
          setText('')
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Добавить</button>
      </form>
      {todos.length === 0 && <p>Список пуст</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, done: !t.done } : t,
                    ),
                  )
                }
              />
              {todo.text}
            </label>
            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
