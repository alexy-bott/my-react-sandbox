import source from './source.txt?raw'

export function ServerDateReviewTask() {
  return (
    <div className="task-card">
      <p className="task-note">Исходный код для разбора. Условие — в task.md. Работа — в attempts/current/.</p>
      <pre style={{whiteSpace: 'pre-wrap'}}><code>{source}</code></pre>
    </div>
  )
}
