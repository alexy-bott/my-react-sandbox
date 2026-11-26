import {useState, type ChangeEvent, type RefObject} from 'react'

// T — тип переданного значения. Ref должен сохранять свою ссылку.
function useLatest<T>(value: T): RefObject<T> {
  // void временно отмечает аргумент использованным.
  // Замени обе строки реализацией.
  void value
  throw new Error('Реализуй useLatest')
}

// Готовый интерфейс проверки использует результат твоего хука.
type DemoProps = {
  onChange: (value: string) => void
}

function Demo({onChange}: DemoProps) {
  const latestOnChange = useLatest(onChange)
  // Обработчик создаётся один раз, а актуальный callback читается при событии.
  const [handler] = useState(() => (event: ChangeEvent<HTMLInputElement>) => {
    latestOnChange.current(event.target.value)
  })

  return <input onChange={handler} placeholder="Введите текст" />
}

export function UseLatestTask() {
  const [prefix, setPrefix] = useState('Первая версия')
  const [message, setMessage] = useState('')

  return (
    <div className="task-card">
      <p>{message || 'Измените поле'}</p>
      <Demo onChange={(value) => setMessage(`${prefix}: ${value}`)} />
      <button type="button" onClick={() => setPrefix('Новая версия')}>
        Обновить callback
      </button>
    </div>
  )
}
