import React, {useEffect, PropsWithChildren, FC, useState} from 'react'

/** Бизнес задача:
1. разобраться с багом, почему то сейчас отображается не то имя что приходит с бекенда даже после сохранения нового имени,
2. разобраться почему постоянно показывается загрузка,
3. сначала должна отображаться загрузка, до того как придут юзер и заказы, после рендерится весь интерфейс
4. верстка должна быть семантическая - для роботов

Техническая задача:
провести ревью, оптимизировать код, переписать код в соответствии с es6+ стандартом, типизировать код, оптимизировать запросы и сделать api слой */

const ProfilePage: FC<PropsWithChildren> = ({children}) => {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // {name: 'Мария'}
    fetch('/v1/get-user-profile', {method: 'GET'})
      .then(res => res.json())
      .then(data => setUser(data));


    // [{id: '1', amount: 5000}, {id: '123', amount: 500}, {id: '566', amount: 2000}]
    fetch('/v1/get-orders', {method: 'GET'})
      .then(data => data.json())
      .then(data => setOrders(data))
      .catch();
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleSave = () => {
    // void
    fetch('/v1/save-profile', {method: 'POST', body: user })
      .then(data => alert('Сохранено'));
  };

  return (
    <div style={{backgroundColor: 'white', padding: '16px'}}>
      <h1>Профиль</h1>
      {loading && <div>Загрузка...</div>}
      {user &&
        <div>
          <input value={'Иван' ?? user.name} onChange={handleNameChange} />
          <button onClick={handleSave}>Сохранить</button>
        </div>
      }
      <OrderList orders={orders} />
      {children}
    </div>
  );
}



function OrderList({ orders }: any) {

  return (
    <div>
      <span>Заказы</span>
      <h1>Тут отображаются ваши заказы</h1>
      <ul>
        {orders.map((order) => (
          <li>
            {order.id}: {order.amount}₽
          </li>
        ))}
      </ul>
    </div>
  );
}
