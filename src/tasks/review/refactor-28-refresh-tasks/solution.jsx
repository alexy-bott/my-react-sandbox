import React, { useEffect, useState } from 'react';
import { fetchTasks } from './tasks-api';
const ToDolist = ({ items }) => {
  return <div><ul>{items.map((item) => <li key={item.id}>{item.text}</li>)}</ul></div>;
};
const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let latest = 0;
    async function refresh(event) {
      if (event.key !== 'r') return;
      const request = ++latest;
      try {
        // await принимает и массив, и Promise. Контракт исходного модуля неизвестен.
        const result = await fetchTasks();
        if (request === latest) setTasks(result);
      } catch (error) {
        if (request === latest) console.error(error);
      }
    }
    document.addEventListener('keydown', refresh);
    return () => { latest++; document.removeEventListener('keydown', refresh); };
  }, []);
  return <div>
    <h2>пример задач: </h2>
    <ToDolist items={[
      { id: 1, text: 'Полить цветы' },
      { id: 2, text: 'Помыть машину' },
      { id: 3, text: 'Выкинуть мусор' },
    ]}/>
    <h2>Сегодня:</h2><ToDolist items={tasks}/>
    <h2>Завтра:</h2><ToDolist items={[]}/>
  </div>;
};
export default App;
