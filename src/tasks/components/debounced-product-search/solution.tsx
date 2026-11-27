import { useEffect, useState } from 'react'
import { searchProducts, type Product } from './api'
export function ProductSearchTask() {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let current = true
    const timer = setTimeout(async () => {
      const result = await searchProducts(query)
      if (current) {
        setItems(result)
        setLoading(false)
      }
    }, 300)
    return () => {
      current = false
      clearTimeout(timer)
    }
  }, [query])
  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setLoading(true)
        }}
      />
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
