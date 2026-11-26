import {useArray} from './useArray'

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
