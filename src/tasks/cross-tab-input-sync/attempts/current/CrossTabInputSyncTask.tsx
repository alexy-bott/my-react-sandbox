import {useState} from 'react'

export function CrossTabInputSyncTask() {
  const [title, setTitle] = useState('')
  void title

  const updateTitle = (title: string) => {
    setTitle(title)
  }

  return (
    <div className="task-card">
      <input onChange={(event) => updateTitle(event.target.value)} />
    </div>
  )
}
