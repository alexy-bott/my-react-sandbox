import { useState } from 'react';

export default function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);
  // При каждом показе React монтирует новое поле. В этот момент оно уже доступно для фокуса.
  return <>
    <button onClick={() => setIsVisible(previous => !previous)}>Toggle Input</button>
    {isVisible && <input autoFocus />}
  </>;
}
