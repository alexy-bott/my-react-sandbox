import { useState, useRef, useEffect } from 'react';

export default function useInfiniteScroll(fetchPage) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const sentinel = useRef(null);
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    fetchPage(page).then(batch => {
      if (!active) return;
      setItems(previous => [...previous, ...batch]);
      // Условие примера: пустая страница завершает выдачу. При наличии курсора
      // или hasMore в реальном API используем его вместо длины массива.
      setHasMore(batch.length > 0);
      setLoading(false);
    }).catch(reason => {
      if (active) { setError(reason); setLoading(false); }
    });
    return () => { active = false; };
  }, [fetchPage, page]);
  useEffect(() => {
    if (loading || error || !hasMore || !items.length) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        setPage(page + 1);
      }
    });
    observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, [page, loading, error, hasMore, items.length]);
  return { items, loading, error, sentinel };
}
