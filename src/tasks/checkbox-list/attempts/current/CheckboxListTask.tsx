import {useState} from 'react'
import {CheckboxList} from './CheckboxList'

const items = ['Магазин на ул. Геологов, д. 48', 'ул. Авиаторов, 31', 'Ателье на улице Сосновой, 10']

export function CheckboxListTask() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  return (
    <div className="task-card">
      <CheckboxList items={items} onChange={setSelectedItems} value={selectedItems} />
    </div>
  )
}
