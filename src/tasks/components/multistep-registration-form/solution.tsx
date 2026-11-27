import { useState } from 'react'

const empty = { name: '', email: '', age: '', city: '', street: '', house: '' }
type Field = keyof typeof empty
const labels: Record<Field, string> = {
  name: 'Имя',
  email: 'Email',
  age: 'Возраст',
  city: 'Город',
  street: 'Улица',
  house: 'Дом',
}
const steps: Field[][] = [
  ['name', 'email', 'age'],
  ['city', 'street', 'house'],
]

export function MultistepRegistrationFormTask() {
  const [data, setData] = useState(empty)
  const [step, setStep] = useState(0)
  const [agreed, setAgreed] = useState(false)
  const [attempted, setAttempted] = useState(false)
  const errors: Record<Field, string> = {
    name: data.name.trim().length < 2 ? 'Минимум 2 символа' : '',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? '' : 'Введите email',
    age:
      data.age && !(Number(data.age) >= 18 && Number(data.age) <= 100)
        ? 'Возраст от 18 до 100'
        : '',
    city: data.city.trim().length < 2 ? 'Минимум 2 символа' : '',
    street: data.street.trim().length < 3 ? 'Минимум 3 символа' : '',
    house: Number(data.house) > 0 ? '' : 'Введите положительное число',
  }
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        if (step < 2) {
          if (steps[step].some((key) => errors[key])) {
            setAttempted(true)
            return
          }
          setAttempted(false)
          setStep(step + 1)
        } else if (agreed && !Object.values(errors).some(Boolean)) {
          console.log({
            ...data,
            house: Number(data.house),
            age: data.age ? Number(data.age) : undefined,
          })
          alert('Форма успешно отправлена')
          setData(empty)
          setAgreed(false)
          setAttempted(false)
          setStep(0)
        }
      }}
    >
      <h2>{['Личная информация', 'Адрес', 'Подтверждение'][step]}</h2>
      {step < 2 ? (
        steps[step].map((key) => (
          <div key={key}>
            <label>
              {labels[key]}
              <input
                type={
                  key === 'age' || key === 'house'
                    ? 'number'
                    : key === 'email'
                      ? 'email'
                      : 'text'
                }
                value={data[key]}
                onChange={(e) => setData({ ...data, [key]: e.target.value })}
              />
            </label>
            {attempted && errors[key] && <p>{errors[key]}</p>}
          </div>
        ))
      ) : (
        <>
          <dl>
            {(Object.keys(data) as Field[]).map((key) => (
              <div key={key}>
                <dt>{labels[key]}</dt>
                <dd>{data[key] || '—'}</dd>
              </div>
            ))}
          </dl>
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            Согласен с условиями
          </label>
        </>
      )}
      {step > 0 && (
        <button
          type="button"
          onClick={() => {
            setAttempted(false)
            setStep(step - 1)
          }}
        >
          Назад
        </button>
      )}
      <button
        disabled={
          step === 2 && (!agreed || Object.values(errors).some(Boolean))
        }
      >
        {step === 2 ? 'Отправить' : 'Далее'}
      </button>
    </form>
  )
}
