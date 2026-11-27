import { useState, type ComponentType } from 'react';

// Todo и index.css отсутствуют в источнике. Предполагаемый контракт
// компонента показан только для разбора, без фиктивной реализации.
type TodoItem = {
  name: string;
  id: string;
  imagesrc?: string;
};
declare const Todo: ComponentType<{ todo: TodoItem }>;

export const todo_list: TodoItem[] = [
  { name: "clear", id: "1", imagesrc: "https://avatars.githubusercontent.com/u/45297354?v=4" },
  { name: "buy", id: "2", imagesrc: "https://avatars.githubusercontent.com/u/6751787?v=4" },
  { name: "change", id: "3" },
  { name: "code", id: "4" },
  { name: "test", id: "5" },
];

export default function App() {
  const [search, setSearch] = useState("");

  // Отфильтрованный список — производные данные, не отдельный state.
  // Для пяти элементов useMemo не требуется.
  // Сохраняем исходный регистрозависимый поиск.
  const visibleTodos = todo_list.filter(todo => todo.name.includes(search));

  return (
    <div className="App">
      <input
        type="text"
        aria-label="Поиск задач"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      {visibleTodos.map(todo => (
        // В исходнике отсутствовал key. Стабильный id сохраняет
        // идентичность компонентов при фильтрации списка.
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

// Убрана лишняя анонимная переменная el, исправлено имя setter.
// Debounce нужен не автоматически: для локальной фильтрации небольшого
// массива задержка только ухудшит отзывчивость.
// Если продукт требует поиск без учёта регистра или пробелов,
// нормализацию можно добавить после согласования требований.
// Для реального запуска понадобятся исходные Todo и CSS.
