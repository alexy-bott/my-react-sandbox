import { useRef, useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);

  function showInput() {
    // При первом клике поля ещё нет. autoFocus сработает при его появлении.
    // При повторном клике поле уже существует и может получить фокус сразу.
    if (inputRef.current) inputRef.current.focus();
    else setIsVisible(true);
  }

  return <div>
    <button onClick={showInput}>Show and focus input</button>
    {isVisible && <input ref={inputRef} type="text" autoFocus />}
  </div>;
}
