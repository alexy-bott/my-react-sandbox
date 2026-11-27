import {useEffect, useState} from 'react'

type User = { id: number | string; name: string };

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch('/api/users', { signal: controller.signal });
        if (!response.ok) throw new Error(response.statusText);
        const data: User[] = await response.json();
        if (!controller.signal.aborted) setUsers(data);
      } catch {
        if (!controller.signal.aborted) setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);
  // Производный список считается при рендере: отдельный эффект показывал старый результат.
  const query = search.toLowerCase();
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query));
  // При поиске на API задержка отправки уменьшает количество запросов при наборе.
  // Даже с debounce нужен контроль устаревших ответов при смене запроса.
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <div>Ошибка загрузки</div>}
      {loading && <div>Loading...</div>}

      {filteredUsers.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </>
  )
}

export default UsersPage
