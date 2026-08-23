import {useState} from 'react'
import {useEffectOnce} from './useEffectOnce'

function Demo() {
  useEffectOnce(() => {
    console.log('Компонент смонтирован')

    return () => {
      console.log('Компонент размонтирован')
    }
  })

  return <p>Компонент смонтирован. Проверьте консоль.</p>
}

export function UseEffectOnceTask() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="task-card">
      {visible && <Demo />}
      <button type="button" onClick={() => setVisible((value) => !value)}>
        {visible ? 'Размонтировать' : 'Смонтировать снова'}
      </button>
    </div>
  )
}
