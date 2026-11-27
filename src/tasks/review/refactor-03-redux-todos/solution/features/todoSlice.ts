// features/todoSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
interface Todo { id: string; title: string; completed: boolean; }
interface TodoState { todos: Todo[]; status: "idle" | "loading" | "succeeded" | "failed"; }
const initialState: TodoState = { todos: [], status: "idle" };
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get<Array<Omit<Todo, "id"> & { id: number }>>("https://jsonplaceholder.typicode.com/todos?_start=0&_end=10");
  return response.data.map(todo => ({ ...todo, id: String(todo.id) }));
});
const todoSlice = createSlice({
  name: "todos", initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = { id: uuidv4(), title: action.payload, completed: false };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) { todo.completed = !todo.completed; }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => { state.status = "loading"; })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload; state.status = "succeeded";
      })
      .addCase(fetchTodos.rejected, (state) => { state.status = "failed"; });
  },
});
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
