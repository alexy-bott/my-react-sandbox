import { useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
};

type Props = {
  initialQuery?: string;
  onSelect: (user: User) => void;
};

type SearchResult =
  | { query: string; users: User[] }
  | { query: string; error: string };

function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null &&
    'id' in value && typeof value.id === 'string' &&
    'name' in value && typeof value.name === 'string';
}

export function UserSearch({ initialQuery = '', onSelect }: Props) {
  // initialQuery — начальное значение, а не управляемый извне query.
  const [query, setQuery] = useState(initialQuery);
  const [result, setResult] = useState<SearchResult | null>(null);

  // Не показываем результаты другого запроса. null означает ожидание
  // debounce или ответа; отдельное дублирующее состояние loading не нужно.
  const current = result?.query === query ? result : null;

  useEffect(() => {
    const controller = new AbortController();

    // В исходнике каждый ввод запускал отдельный таймер и запрос.
    // Cleanup отменяет ещё не начавшийся запрос и текущий fetch.
    const timer = setTimeout(async () => {
      try {
        const params = new URLSearchParams({ q: query });
        const response = await fetch('/api/users?' + params, {
          signal: controller.signal,
        });

        // fetch не отклоняет Promise только из-за HTTP 4xx/5xx.
        if (!response.ok) throw new Error('HTTP ' + response.status);

        // TypeScript-тип не проверяет данные на границе API.
        const data: unknown = await response.json();
        if (!Array.isArray(data) || !data.every(isUser)) {
          throw new Error('Некорректный ответ API');
        }

        // Даже если запрос завершился после cleanup, не применяем ответ.
        if (!controller.signal.aborted) setResult({ query, users: data });
      } catch {
        if (!controller.signal.aborted) {
          setResult({ query, error: 'Не удалось загрузить пользователей' });
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="search">
      {/* В исходнике loading заменял весь UI и размонтировал input:
          пользователь терял возможность продолжать поиск и фокус. */}
      <input
        aria-label="Поиск пользователей"
        value={query}
        onChange={event => {
          const next = event.target.value;
          if (next !== query) {
            setResult(null);
            setQuery(next);
          }
        }}
      />

      {!current && <div role="status">Loading...</div>}
      {current && 'error' in current && <div role="alert">{current.error}</div>}
      {current && 'users' in current && current.users.map(user => (
        // Стабильный id вместо индекса; button поддерживает клавиатуру.
        <div key={user.id}>
          <button type="button" onClick={() => onSelect(user)}>{user.name}</button>
        </div>
      ))}
    </div>
  );
}

// Сохраняем API /api/users?q=..., 300 мс, initialQuery, onSelect.
// Пустой запрос отправляется, как и раньше: другой контракт не задан.
// Предполагается, что API возвращает массив пользователей с уникальными id.
// Для сложной схемы в production уместна общая валидация API-слоя.
// useMemo/useCallback и отдельная библиотека здесь не обязательны.
// Backend не предоставлен: это разбор исходного контракта, не проверка API.
