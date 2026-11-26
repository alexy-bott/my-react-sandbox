import source from './source.txt?raw'
import source38 from './source-38.txt?raw'

export function Refactor12Task() {
  return (
    <div className="task-card">
      <p className="task-note">Исходник для ревью. Условие — в task.md; замечания — в attempts/current/review.md.</p>
      <pre style={{whiteSpace: 'pre-wrap'}}><code>{source}</code></pre>
      <details>
        <summary>Вариант из задания №38</summary>
        <pre style={{whiteSpace: 'pre-wrap'}}><code>{source38}</code></pre>
      </details>
    </div>
  )
}
