type PlainObject = Record<string, unknown>
type ObjectUpdate<T extends PlainObject> = Partial<T> | ((current: T) => Partial<T>)

// T описывает объект, а Partial<T> — обновление части его полей.
function useObject<T extends PlainObject>(
  initialValue?: T,
): readonly [T, (update: ObjectUpdate<T>) => void] {
  // void временно отмечает аргумент использованным.
  // Замени обе строки реализацией; без аргумента начальное значение — {}.
  void initialValue
  throw new Error('Реализуй useObject')
}

// Готовый интерфейс проверки использует результат твоего хука.
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
      <button type="button" onClick={() => setRecord({c: 3})}>
        Add c
      </button>
    </div>
  )
}
