// component.jsx
import * as React from 'react';
import { getData, ClientType } from './dataService';
function Component(props) {
  const { store } = props;
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const response = getData(store.getState());
      const data = await (await response).json();
      setItems(data.items);
    })();
  }, []);
  return <div>{items.map((item) => (
    <div className={`item item_type_${item.type}`} key={item.id}>
      {item.type === ClientType.person ? (<span>{item.name}</span>) : (<span>Компания {item.id}</span>)}
      <button onClick={() => { console.log(item.id); }}>choose</button>
    </div>
  ))}</div>;
}
export default Component;

