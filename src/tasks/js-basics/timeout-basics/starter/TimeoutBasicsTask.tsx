import {useState} from 'react'
import {scheduleMessage} from './scheduleMessage'

export function TimeoutBasicsTask() {
  const [status, setStatus] = useState<'idle' | 'waiting' | 'done'>('idle')

  function showMessage() {
    setStatus('done')
  }

  function handleStart() {
    setStatus('waiting')
    scheduleMessage(showMessage)
  }

  return (
    <div className="task-card">
      <h2>Первый отложенный вызов</h2>
      <button type="button" onClick={handleStart} disabled={status === 'waiting'}>
        {status === 'done' ? 'Запустить ещё раз' : 'Запустить'}
      </button>
      <p>
        {status === 'idle' && 'Нажми «Запустить».'}
        {status === 'waiting' && 'Ожидаем сообщение…'}
        {status === 'done' && 'Можно запускать поиск'}
      </p>
    </div>
  )
}
