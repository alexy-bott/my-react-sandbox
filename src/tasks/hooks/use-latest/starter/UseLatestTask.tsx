import {useState, type ChangeEvent} from 'react'
import {useLatest} from './useLatest'

type DemoProps = {
  onChange: (value: string) => void
}

function Demo({onChange}: DemoProps) {
  const latestOnChange = useLatest(onChange)
  const [handler] = useState(() => (event: ChangeEvent<HTMLInputElement>) => {
    const callback = latestOnChange.current

    if (typeof callback === 'function') {
      callback(event.target.value)
    }
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
