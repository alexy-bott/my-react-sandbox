import { useEffect, useState, type PropsWithChildren } from 'react'
import { loadProfile, saveProfile, type Profile, type Order } from './api'

export default function ProfilePage({ children }: PropsWithChildren) {
  const [user, setUser] = useState<Profile | null>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [error, setError] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    loadProfile(controller.signal).then(([profile, items]) => {
      if (!controller.signal.aborted) { setUser(profile); setOrders(items) }
    }).catch(() => { if (!controller.signal.aborted) setError(true) })
    return () => controller.abort()
  }, [])
  if (error) return <p>Ошибка загрузки профиля</p>
  if (!user) return <p>Загрузка...</p>
  return <main>
    <h1>Профиль</h1>
    <form onSubmit={async event => {
      event.preventDefault()
      try { await saveProfile(user); alert('Сохранено') }
      catch { alert('Ошибка сохранения') }
    }}>
      {/* Одно значение служит и полю, и запросу сохранения. */}
      <label>Имя <input value={user.name} onChange={event => setUser({ ...user, name: event.target.value })} /></label>
      <button>Сохранить</button>
    </form>
    <section><h2>Заказы</h2>
      <ul>{orders.map(order => <li key={order.id}>{order.id}: {order.amount}₽</li>)}</ul>
    </section>
    {children}
  </main>
}
