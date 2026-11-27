import {useState} from 'react'

export function ConditionalInputsTask() {
  const [showFirstVariant, setShowFirstVariant] = useState(false)

  return (
    <div className="task-card">
      <label>
        <input
          checked={showFirstVariant}
          onChange={() => setShowFirstVariant((currentValue) => !currentValue)}
          type="checkbox"
        />
        Показать первый вариант
      </label>

      {/* Разные ключи перемонтируют поле и сбросят его собственное значение. */}
      <div>
        {showFirstVariant ? (
          <input key="first" aria-label="Первый вариант" style={{border: '3px solid cyan'}} type="text" />
        ) : (
          <input key="second" aria-label="Второй вариант" style={{border: '3px solid red'}} type="text" />
        )}
      </div>
    </div>
  )
}
