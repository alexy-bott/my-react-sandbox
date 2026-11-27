import {useState} from 'react'

export function CrossTabInputSyncTask() {
  const [title, setTitle] = useState('')

  const updateTitle = (title: string) => {
    setTitle(title)
  }

  return (
    <div className="task-card">
      <input value={title} onChange={(event) => updateTitle(event.target.value)} />
    </div>
  )
}
