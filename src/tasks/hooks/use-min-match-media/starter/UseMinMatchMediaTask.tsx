import {useState} from 'react'

interface MediaDimensions {
  width: number
  height: number
}

function useMinMatchMedia(
  mediaParams: MediaDimensions,
  callback?: () => void,
): boolean {
  // Замени обе строки реализацией.
  void [mediaParams, callback]
  throw new Error('Реализуй useMinMatchMedia')
}

// Готовый интерфейс показывает результат и количество пересечений границы.
export function UseMinMatchMediaTask() {
  const [changes, setChanges] = useState(0)
  const matches = useMinMatchMedia({width: 1024, height: 768}, () => {
    setChanges(count => count + 1)
  })

  return (
    <div className="task-card">
      <p>Минимальный размер: 1024 × 768</p>
      <p>Результат: {matches ? 'true' : 'false'}</p>
      <p>Пересечений границы: {changes}</p>
    </div>
  )
}
