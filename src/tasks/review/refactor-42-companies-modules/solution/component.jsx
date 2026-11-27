// component.jsx
import * as React from 'react';
import { getData, ClientType } from './dataService';
function Component(props) {
  const { store } = props;
  const [items, setItems] = React.useState([]);
  // Если store поддерживает стандартный subscribe, смена клиента запускает новый запрос.
  const clientId = React.useSyncExternalStore(store.subscribe, () => store.getState().client.id);
  React.useEffect(() => {
    const controller = new AbortController();
    setItems([]);
    getData(store.getState(), controller.signal).then(data => {
      if (!controller.signal.aborted) setItems(data.items);
    }).catch(error => { if (!controller.signal.aborted) console.error(error); });
    return () => controller.abort();
  }, [store, clientId]);
  return <div>{items.map((item) => (
    <div className={`item item_type_${item.type}`} key={item.id}>
      {item.type === ClientType.person ? (<span>{item.name}</span>) : (<span>Компания {item.id}</span>)}
      <button onClick={() => { console.log(item.id); }}>choose</button>
    </div>
  ))}</div>;
}
export default Component;
