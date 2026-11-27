// App.tsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { fetchTodos } from "./features/todoSlice";
import type { RootState, AppDispatch } from "./store";
const App = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const todoStatus = useSelector((state: RootState) => state.todos.status);
  const dispatch = useDispatch<AppDispatch>();
  // Вызов action creator в рендере не запускает thunk.
  useEffect(() => { if (todoStatus === "idle") dispatch(fetchTodos()); }, [dispatch, todoStatus]);
  return <div>
    <AddTodoForm />
    {todoStatus === "loading" && <p>Loading...</p>}
    {todoStatus === "failed" && <p>Failed to load todos.</p>}
    <TodoList todos={todos} />
  </div>;
};
export default App;

