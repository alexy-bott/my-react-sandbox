import {useMinMatchMedia} from './useMinMatchMedia'

export function UseMinMatchMediaTask() {
  const matches = useMinMatchMedia({width: 1024, height: 768})

  return (
    <div className="task-card">
      <p>Минимальный размер: 1024 × 768</p>
      <p>Результат: {matches ? 'true' : 'false'}</p>
    </div>
  )
}
