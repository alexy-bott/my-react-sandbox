import source from './source.txt?raw'

export function Refactor07Task() {
  return (
    <div className="task-card">
      <p className="task-note">Исходник для ревью. Условие — в task.md; замечания — в attempts/current/review.md.</p>
      <pre style={{whiteSpace: 'pre-wrap'}}><code>{source}</code></pre>
    </div>
  )
}
