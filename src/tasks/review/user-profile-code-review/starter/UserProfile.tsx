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

  const loadUser = async () => {
    setLoading(true);
    const data = await fetchUser(userId);
    setUser(data);
    setLoading(false);
  };

  useEffect(async () => {
    await loadUser();
  }, [loadUser]);

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  if (showOrders) {
    useEffect(() => {
      fetchOrders(userId).then(setOrders);
    }, [userId]);
  }

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFavorite = (orderId: string) => {
    const order = orders.find((o) => o.id === orderId);

    if (order) {
      order.isFavorite = !order.isFavorite;
      setOrders(orders);
    }
  };

  return (
    <div>
      {loading && <div>Загрузка...</div>}

      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {showOrders && (
        <div>
          <h3>Заказы ({orders.length})</h3>
          {orders.map((order) => (
            <div>
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
