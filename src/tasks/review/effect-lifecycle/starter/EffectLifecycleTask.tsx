import {useEffect, useState} from 'react'

function ObservedComponent() {
  const [value, setValue] = useState(1)

  useEffect(() => {
    console.log('start', value)

    return () => {
      console.log('finish', value)
    }
  }, [value])

  return (
    <div className="task-card">
      <p>Текущее значение: {value}</p>
      <button onClick={() => setValue((currentValue) => currentValue + 1)} type="button">
        Увеличить
      </button>
    </div>
  )
}

export function EffectLifecycleTask() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setIsVisible((currentValue) => !currentValue)} type="button">
        {isVisible ? 'Скрыть' : 'Показать'} компонент
      </button>

      {isVisible && <ObservedComponent />}
    </div>
  )
}
