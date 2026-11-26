import source from './source.txt?raw'
import source33 from './source-33.txt?raw'

export function Refactor25Task() {
  return (
    <div className="task-card">
      <p className="task-note">Исходник для ревью. Условие — в task.md; замечания — в attempts/current/review.md.</p>
      <pre style={{whiteSpace: 'pre-wrap'}}><code>{source}</code></pre>
      <details>
        <summary>Вариант из задания №33</summary>
        <pre style={{whiteSpace: 'pre-wrap'}}><code>{source33}</code></pre>
      </details>
    </div>
  )
}
