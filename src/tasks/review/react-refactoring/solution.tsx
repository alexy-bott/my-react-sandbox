import {useEffect, useMemo} from 'react'
import {bigComputations, sendData, sendMetric} from './services'

type ReviewTargetProps = {
  argument: number
}

function ReviewTarget({argument}: ReviewTargetProps) {
  // Если argument изменится, отправляем результат для нового аргумента.
  const data = useMemo(() => bigComputations(argument), [argument]);
  const items = [{id: 1}, {id: 2}, {id: 3}];
  useEffect(() => {
    const onClick = () => sendMetric('click');
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  const handleItemClick = (id: number) => sendData(data, id);

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
