import source from './source.txt?raw'
import source23 from './source-23.txt?raw'

export function Refactor10Task() {
  return (
    <div className="task-card">
      <p className="task-note">Исходник для ревью. Условие — в task.md; замечания — в attempts/current/review.md.</p>
      <pre style={{whiteSpace: 'pre-wrap'}}><code>{source}</code></pre>
      <details>
        <summary>Вариант из задания №23</summary>
        <pre style={{whiteSpace: 'pre-wrap'}}><code>{source23}</code></pre>
      </details>
    </div>
  )
}
