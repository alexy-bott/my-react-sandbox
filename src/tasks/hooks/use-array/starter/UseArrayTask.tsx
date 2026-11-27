// T — тип элемента массива. Готовый интерфейс использует этот контракт.
type ArrayResult<T> = {
  value: T[]
  push: (item: T) => void
  removeByIndex: (index: number) => void
}

function useArray<T>(_initialValue: T[]): ArrayResult<T> {
  throw new Error('Реализуй useArray')
}

// Готовый интерфейс проверки использует результат твоего хука.
export function UseArrayTask() {
  const {value, push, removeByIndex} = useArray<number>([1, 2, 3])

  return (
    <div className="task-card">
      <ul>
        {value.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button type="button" onClick={() => removeByIndex(index)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>

      <button type="button" onClick={() => push(value.length + 1)}>
        Добавить
      </button>
    </div>
  )
}
