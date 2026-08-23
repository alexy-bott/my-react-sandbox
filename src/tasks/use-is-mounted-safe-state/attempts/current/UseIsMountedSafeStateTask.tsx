import {useState} from 'react'
import {useIsMounted, useSafeState} from './useIsMountedSafeState'

function Demo() {
  const isMounted = useIsMounted()
  const [message, setMessage] = useSafeState('Обновление не запущено')

  const startUpdate = () => {
    setMessage('Ожидание...')
    window.setTimeout(() => {
      console.log(`Компонент смонтирован: ${isMounted()}`)
      setMessage((current) => `${current} Готово`)
    }, 1500)
  }

  return (
    <>
      <p>{message}</p>
      <button type="button" onClick={startUpdate}>
        Запустить отложенное обновление
      </button>
    </>
  )
}

export function UseIsMountedSafeStateTask() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="task-card">
      {visible && <Demo />}
      <button type="button" onClick={() => setVisible((value) => !value)}>
        {visible ? 'Размонтировать Demo' : 'Смонтировать Demo'}
      </button>
    </div>
  )
}
