import {useState} from 'react'
import {useEffectOnce} from './useEffectOnce'

type DemoProps = {
  onEffect: () => void
  onCleanup: () => void
}

function Demo({onEffect, onCleanup}: DemoProps) {
  useEffectOnce(() => {
    console.log('Компонент смонтирован')
    onEffect()

    return () => {
      console.log('Компонент размонтирован')
      onCleanup()
    }
  })

  return <p>Компонент смонтирован. Проверьте консоль.</p>
}

export function UseEffectOnceTask() {
  const [visible, setVisible] = useState(true)
  const [effectRuns, setEffectRuns] = useState(0)
  const [cleanups, setCleanups] = useState(0)

  return (
    <div className="task-card">
      <p>Effect runs: {effectRuns}</p>
      <p>Cleanups: {cleanups}</p>
      {visible && (
        <Demo
          onEffect={() => setEffectRuns((count) => count + 1)}
          onCleanup={() => setCleanups((count) => count + 1)}
        />
      )}
      <button type="button" onClick={() => setVisible((value) => !value)}>
        {visible ? 'Размонтировать' : 'Смонтировать снова'}
      </button>
    </div>
  )
}
