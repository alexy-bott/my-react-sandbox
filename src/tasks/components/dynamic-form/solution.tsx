import { useState } from 'react'
export function DynamicFormTask() {
  const [fields, setFields] = useState([{ id: 'first', value: '' }])
  function update(next: typeof fields) {
    setFields(next)
    console.log(next.map((field) => field.value))
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        console.log(fields.map((f) => f.value))
      }}
    >
      {fields.map((field) => (
        <div key={field.id}>
          <input
            value={field.value}
            onChange={(e) =>
              update(
                fields.map((f) =>
                  f.id === field.id ? { ...f, value: e.target.value } : f,
                ),
              )
            }
          />
          <button
            type="button"
            disabled={fields.length === 1}
            onClick={() => update(fields.filter((f) => f.id !== field.id))}
          >
            Удалить
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          update([...fields, { id: crypto.randomUUID(), value: '' }])
        }
      >
        Добавить поле
      </button>
      <button>Отправить</button>
    </form>
  )
}
