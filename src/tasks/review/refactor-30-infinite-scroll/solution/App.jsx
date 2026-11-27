import useInfiniteScroll from './hooks';

// Исходный App останавливается на именованном импорте default-экспорта.
// Даже после исправления импорта items равно числу 1: items.map бросит ошибку.
// Ни одной строки данных он не отрисует. 10 не ограничивает размер ответа сервера.
const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(`https://api.example.com/data?page=${pageNumber}`);
      if (!response.ok) throw new Error('Network error');
      const json = await response.json();
      return json.data;
    } catch (err) { console.error(err); throw err; }
  };
export default function App() {
  const { items, loading: isLoading, error, sentinel } = useInfiniteScroll(fetchData);
  return <div>
    {items.map(item => (<div key={item.id}><p>{item.title}</p></div>))}
    <div ref={sentinel} aria-hidden="true" />
    {isLoading && <p>Загрузка...</p>}
    {error && <p>Ошибка: {error.message}</p>}
  </div>;
};
