import { useState } from 'react'
type Product = {
  name: string
  price: number
  count: number
}

const PRODUCTS: Product[] = [
  { name: 'apple', price: 10, count: 10 },
  { name: 'banana', price: 20, count: 20 },
  { name: 'orange', price: 30, count: 30 },
  { name: 'bread', price: 50, count: 50 },
  { name: 'milk', price: 60, count: 60 },
  { name: 'eggs', price: 70, count: 70 },
]

function Cart({ name, price, count }: Product) {
  return (
    <div className="cart">
      <div className="cart-item">
        <p>Название:</p>
        <p>{name}</p>
      </div>
      <div className="cart-item">
        <p>Сумма:</p>
        <p>{price}</p>
      </div>
      <div className="cart-item">
        <p>Количество:</p>
        <p>{count}</p>
      </div>
    </div>
  )
}

export function ProductListFilteringTask() {
  const [fruitsOnly, setFruitsOnly] = useState(false)
  const visible = fruitsOnly
    ? PRODUCTS.filter((p) => ['apple', 'banana', 'orange'].includes(p.name))
    : PRODUCTS

  return (
    <div className="task-card">
      <div>
        <input
          type="checkbox"
          id="isFruit"
          checked={fruitsOnly}
          onChange={(e) => setFruitsOnly(e.target.checked)}
        />
        <label htmlFor="isFruit">Показывать только фрукты</label>
      </div>
      <div>Общее количество: {visible.reduce((n, p) => n + p.count, 0)}</div>
      <div>
        Общая цена: {visible.reduce((n, p) => n + p.price * p.count, 0)}
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {visible.map((product) => (
          <Cart key={product.name} {...product} />
        ))}
      </div>
    </div>
  )
}
