import {useState} from 'react'
import {useIsMounted, useSafeState} from './useIsMountedSafeState'

type DemoProps = {
  onMountedCheck: (isMounted: boolean) => void
}

function Demo({onMountedCheck}: DemoProps) {
  const isMounted = useIsMounted()
  const [message, setMessage] = useSafeState('Обновление не запущено')

  const startUpdate = () => {
    setMessage('Ожидание...')
    window.setTimeout(() => {
      const mounted = isMounted()
      console.log(`Компонент смонтирован: ${mounted}`)
      onMountedCheck(mounted)
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
  const [lastMountedCheck, setLastMountedCheck] = useState<boolean | null>(null)

  return (
    <div className="task-card">
      <p>
        Last isMounted check:{' '}
        {lastMountedCheck === null ? '—' : String(lastMountedCheck)}
      </p>
      {visible && <Demo onMountedCheck={setLastMountedCheck} />}
      <button type="button" onClick={() => setVisible((value) => !value)}>
        {visible ? 'Размонтировать Demo' : 'Смонтировать Demo'}
      </button>
    </div>
  )
}
