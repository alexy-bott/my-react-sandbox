import { useEffect, useState } from "react";
import type { User, Order } from "./types";
import { fetchUser, fetchOrders } from "./api";
import { handleFullscreenChange } from "./utils";

type TProps = {
  userId: number;
  showOrders: boolean;
}

export const UserProfile = ({ userId, showOrders }: TProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  useEffect(() => {
    let current = true;
    setUser(null);
    setLoading(true);
    setError(false);
    async function load() {
      try {
        const data = await fetchUser(userId);
        if (current) setUser(data);
      } catch {
        if (current) setError(true);
      } finally {
        if (current) setLoading(false);
      }
    }
    load();
    return () => { current = false; };
  }, [userId]);

  // Смена showOrders не меняет порядок хуков. Ответ старого запроса игнорируем.
  useEffect(() => {
    let current = true;
    setOrders([]);
    if (showOrders) {
      fetchOrders(userId).then(data => { if (current) setOrders(data); })
        .catch(reason => { if (current) console.error(reason); });
    }
    return () => { current = false; };
  }, [userId, showOrders]);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFavorite = (orderId: string) => {
    // Меняем ссылку на массив и на выбранный заказ, иначе React может пропустить обновление.
    setOrders(previous => previous.map(order => order.id === orderId
      ? { ...order, isFavorite: !order.isFavorite } : order));
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки пользователя</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div>

      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {showOrders && (
        <div>
          <h3>Заказы ({orders.length})</h3>
          {orders.map((order) => (
            <div key={order.id}>
              <span>{order.title}</span>
              <button onClick={() => toggleFavorite(order.id)}>
                {order.isFavorite ? "★" : "☆"} В избранное
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
