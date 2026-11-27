import { useEffect, useState } from 'react'
import { fetchItems, type ItemsResponse } from './api'
export function MockedDataListTask() {
  const [items, setItems] = useState<ItemsResponse['result']['items']>([])
  useEffect(() => {
    fetchItems().then((data) => setItems(data.result.items))
  }, [])
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
