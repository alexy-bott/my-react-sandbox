import React, { useState, useEffect } from 'react';
const BuggyTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const completedCount = todos.filter(todo => todo.completed).length;
  // Без списка зависимостей каждый ответ запускал бы новую загрузку.
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', { signal: controller.signal });
      if (!response.ok) throw new Error(response.statusText);
      const initial = await response.json();
      setTodos(previous => [...initial, ...previous]);
    }
    load().catch(error => { if (!controller.signal.aborted) console.error(error); });
    return () => controller.abort();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo) return;
    const item = { id: crypto.randomUUID(), title: newTodo, completed: false };
    setTodos(previous => [...previous, item]);
    setNewTodo('');
  };
  const toggleTodo = id => setTodos(previous => previous.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
  // Список служит источником истины и для заголовка, и для счётчика.
  useEffect(() => { document.title = `${completedCount} tasks completed`; }, [completedCount]);
  return <div className="todo-container">
    <h1>Buggy Todo List</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add new todo" />
      <button type="submit">Add Todo</button>
    </form>
    <ul>{todos?.map((todo) => <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : undefined }} onClick={() => toggleTodo(todo.id)}>{todo.title}</li>)}</ul>
    <div>Completed tasks: {completedCount}</div>
  </div>;
};
export default BuggyTodo;
