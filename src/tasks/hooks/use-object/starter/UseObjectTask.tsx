type PlainObject = Record<string, unknown>
// Partial<T> позволяет передать только изменяемые поля объекта.
type ObjectUpdate<T extends PlainObject> = Partial<T> | ((current: T) => Partial<T>)
type ObjectResult<T extends PlainObject> = readonly [T, (update: ObjectUpdate<T>) => void]

// Перегрузки описывают два вызова: без аргумента — произвольный объект,
// с аргументом — объект указанного или выведенного типа.
function useObject(): ObjectResult<PlainObject>
function useObject<T extends PlainObject>(_initialValue: T): ObjectResult<T>
function useObject(_initialValue: PlainObject = {}): ObjectResult<PlainObject> {
  throw new Error('Реализуй useObject')
}

// Готовый интерфейс проверки использует результат твоего хука.
type CounterRecord = {
  a: number
  b: number
  c?: number
}

export function UseObjectTask() {
  const [record, setRecord] = useObject<CounterRecord>({a: 1, b: 2})

  return (
    <div className="task-card">
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <button type="button" onClick={() => setRecord((previous) => ({a: previous.a + 1}))}>
        Increase a
      </button>{' '}
      <button type="button" onClick={() => setRecord((previous) => ({b: previous.b + 1}))}>
        Increase b
      </button>{' '}
      <button type="button" onClick={() => setRecord({c: 3})}>
        Add c
      </button>
    </div>
  )
}
