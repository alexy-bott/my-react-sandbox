// App.jsx
import { useState, useEffect } from 'react';
import { useInfiniteScroll } from './hooks';
const App = () => {
  const [page, setPage] = useState(1);
  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(`https://api.example.com/data?page=${pageNumber}`);
      if (!response.ok) throw new Error('Network error');
      const json = await response.json();
      return json.data;
    } catch (err) { console.error(err); throw err; }
  };
  const [items, isLoading, error] = useInfiniteScroll(fetchData, page, 10);
  return <div>
    {items.map(item => (<div key={item.id}><p>{item.title}</p></div>))}
    {isLoading && <p>Загрузка...</p>}
    {error && <p>Ошибка: {error.message}</p>}
  </div>;
};
export default App;

