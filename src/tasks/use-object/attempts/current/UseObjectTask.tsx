import {useObject} from './useObject'

export function UseObjectTask() {
  const [record, setRecord] = useObject<Record<string, number>>({a: 1, b: 2})

  return (
    <div className="task-card">
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <button type="button" onClick={() => setRecord((previous) => ({a: previous.a + 1}))}>
        Increase a
      </button>{' '}
      <button type="button" onClick={() => setRecord((previous) => ({b: previous.b + 1}))}>
        Increase b
      </button>{' '}
      <button type="button" onClick={() => setRecord(() => ({c: 3}))}>
        Add c
      </button>
    </div>
  )
}
