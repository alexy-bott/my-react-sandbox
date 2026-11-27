import React, { useState, useEffect } from "react";
const Button = (props) => {
  return <div style={{ border: '1px solid black', width: '150px' }} className={props.className} onClick={props.onClick}>{props.title}</div>;
}
const User = (props) => { return <div>{props.age}</div>; }
export default () => {

  const [users, setUsers] = useState([]);
  const [remainTime, setRemainTime] = useState(15);
  const count = users.length;
  const handleClick = () => {
    const user = { id: crypto.randomUUID(), age: 20 + Math.random() * 40 };
    setUsers(previous => [...previous, user]);
  };
  const handleRemove = () => setUsers([]);
  // Срок измеряем по часам: последовательные таймеры могут опаздывать.
  useEffect(() => {
    const end = Date.now() + 15000;
    const timer = setInterval(() => {
      const remaining = Math.max(0, (end - Date.now()) / 1000);
      setRemainTime(remaining);
      if (remaining === 0) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);
  const ageSum = users.reduce((sum, user) => sum + user.age, 0);
  if (remainTime <= 0) {
    return <div><div>Count: {count}</div><div>Age sum: {Math.round(ageSum)}</div>
      {users.map((value) => (<User key={value.id} age={value.age} />))}
    </div>;
  }
  return <div>
    <div>Remain time: {remainTime.toFixed(1)} seconds</div>
    <Button onClick={handleClick} title="Add random user" />
    <div>Count: {count}</div><div>Age sum: {Math.round(ageSum)}</div>
    {users.map((value) => (<User key={value.id} age={value.age} />))}
    {count > 0 && <Button onClick={handleRemove} title="Remove all" className="remove-button" />}
  </div>;
};
