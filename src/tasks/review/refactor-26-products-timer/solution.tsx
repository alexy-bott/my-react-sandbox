import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
interface Product { description: string; id: string; info: string; name: string; }
type Shop = {
  coordinate: number[];
  id: string;
  name: string;
  priceList: Record<string, string>;
};
// Таймер принадлежит экземпляру компонента. Глобальные started и counter
// разделяли время между экземплярами и оставляли интервал после размонтирования.
const AppTimer = () => {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer === 0) return;
    const timeout = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(timeout);
  }, [timer]);
  return <div><div className="Controls">{timer}</div><ProductList currency=" $" /></div>;
};

function ProductList({ currency, error = false }: { currency: string; error?: boolean }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    if (error) return;
    const controller = new AbortController();
    async function load(path: string) {
      const response = await fetch('https://my-json-server.typicode.com/cyberwalrus/demo/' + path,
        { signal: controller.signal });
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }
    Promise.all([load('products'), load('shops')]).then(([items, stores]) => {
      if (!controller.signal.aborted) {
        setProducts(items);
        setShops(stores);
      }
    }).catch(reason => { if (!controller.signal.aborted) console.error(reason); });
    return () => controller.abort();
  }, [error]);
  // Ранний выход после хуков сохраняет одинаковый порядок их вызова.
  if (error) return null;
  return <div className="productsWrapper">{products.map(({ id, name, description }) =>
    <main className="products" key={id}>
      <h1 className="products-Item_green">{name}</h1><h5>{description}</h5><hr />
      <ul className="postList">{shops.filter(shop => Object.hasOwn(shop.priceList, id)).map(shop =>
        <li className="post__header" key={shop.id}>{shop.name} - {shop.priceList[id]}{currency}</li>
      )}</ul>
    </main>
  )}</div>;
}
createRoot(document.getElementById('root') as HTMLElement).render(<AppTimer />);
