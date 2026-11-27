// hooks.js
import { useState, useRef, useEffect } from 'react';
const useInfiniteScroll = (fetchMoreItems, items, threshold = 5) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const observer = useRef(null);
  const lastItemElement = useRef(null);
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    const options = { root: null, rootMargin: '0px', threshold: 1.0 };
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !loading) { loadMoreItems(); }
      });
    }, options);
    if (lastItemElement.current) { observer.current.observe(lastItemElement.current); }
    return () => { if (observer.current) observer.current.disconnect(); };
  }, [items, loading]);
  const loadMoreItems = async () => {
    setLoading(true);
    try {
      const newItems = await fetchMoreItems(items.length / threshold + 1); // Fetch next page of items
      setItems(prevItems => [...prevItems, ...newItems]);
    } catch (err) { setError(err); }
    finally { setLoading(false); }
  };
  return [items, loading, error];
};
export default useInfiniteScroll;
