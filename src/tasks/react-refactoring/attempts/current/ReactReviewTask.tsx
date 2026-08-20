import {useCallback, useEffect, useState} from 'react'
import {bigComputations, sendData, sendMetric} from './services'

type ReviewTargetProps = {
  argument: number
}

function ReviewTarget({argument}: ReviewTargetProps) {
  const [data] = useState(bigComputations(argument))
  const [items] = useState([{id: 1}, {id: 2}, {id: 3}])

  useEffect(() => {
    document.addEventListener('click', () => {
      sendMetric('click')
    })
  })

  const handleItemClick = useCallback(
    (id: number) => {
      sendData(data, id)
    },
    [data],
  )

  return (
    <div>
      {items.map((item) => (
        <button key={item.id} onClick={() => handleItemClick(item.id)} type="button">
          Элемент {item.id}
        </button>
      ))}
    </div>
  )
}

export function ReactReviewTask() {
  return (
    <div className="task-card">
      <ReviewTarget argument={42} />
    </div>
  )
}
