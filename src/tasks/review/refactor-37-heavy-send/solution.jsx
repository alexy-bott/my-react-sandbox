import { memo, useCallback, useRef, useState } from "react";

export const App = () => {
  const [text, setText] = useState("");
  const currentText = useRef("");
  const updateText = event => {
    currentText.current = event.target.value;
    setText(currentText.current);
  };
  // Обе кнопки получают один стабильный обработчик, читающий актуальный текст при отправке.
  const onSend = useCallback(() => console.log("send text = ", currentText.current), []);
  return <div>
    <input value={text} onChange={updateText} />
    <HeavySendButton onClick={onSend} />
    <Calculation />
    <button onClick={onSend}>Кнопка отправки 2</button>
  </div>;
};
const HeavySendButton = memo(function HeavySendButton({ onClick }) {
  console.log("SendButton render");
  return <button onClick={onClick}>Кнопка отправки 1</button>;
});
// Вариант при условии, что значение должно соответствовать моменту открытия.
// Если нужен момент каждого изменения текста, кэширование изменит смысл результата.
function Calculation() {
  const [result] = useState(() => {
    console.log("heavyCalculation");
    return 9 + Date.now();
  });
  return <pre>{result}</pre>;
}
