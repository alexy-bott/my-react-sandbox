type Product = {
  name: string
  price: number
  count: number
}

const PRODUCTS: Product[] = [
  {name: 'apple', price: 10, count: 10},
  {name: 'banana', price: 20, count: 20},
  {name: 'orange', price: 30, count: 30},
  {name: 'bread', price: 50, count: 50},
  {name: 'milk', price: 60, count: 60},
  {name: 'eggs', price: 70, count: 70},
]

function Cart({name, price, count}: Product) {
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
  void PRODUCTS

  return (
    <div className="task-card">
      <div>
        <input type="checkbox" id="isFruit" />
        <label htmlFor="isFruit">Показывать только фрукты</label>
      </div>
      <div>
        Общее количество: <span />
      </div>
      <div>
        Общая цена: <span />
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        <Cart name="Apple" price={10} count={5} />
      </div>
    </div>
  )
}
