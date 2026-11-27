import { useState } from 'react'
import { offers } from './data'
export function SupplierOffersFilters() {
  const [query, setQuery] = useState('')
  const [stock, setStock] = useState('all')
  const [order, setOrder] = useState('asc')
  const visible = offers
    .filter(
      (row) =>
        [row.partName, row.brand, row.supplier].some((value) =>
          value.toLowerCase().includes(query.toLowerCase()),
        ) &&
        (stock === 'all' || row.inStock === (stock === 'yes')),
    )
    .sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price))
  return (
    <section>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск"
      />
      <select value={stock} onChange={(e) => setStock(e.target.value)}>
        <option value="all">Все</option>
        <option value="yes">В наличии</option>
        <option value="no">Нет в наличии</option>
      </select>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Сначала дешевле</option>
        <option value="desc">Сначала дороже</option>
      </select>
      <table>
        <thead>
          <tr>
            {[
              'Деталь',
              'Бренд',
              'Поставщик',
              'Цена',
              'Доставка, дни',
              'В наличии',
            ].map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.map((o) => (
            <tr key={o.id}>
              <td>{o.partName}</td>
              <td>{o.brand}</td>
              <td>{o.supplier}</td>
              <td>{o.price}</td>
              <td>{o.deliveryDays}</td>
              <td>{o.inStock ? 'Да' : 'Нет'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
