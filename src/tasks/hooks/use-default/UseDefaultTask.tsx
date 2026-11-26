import type {Dispatch, SetStateAction} from 'react'

// T — тип значения. Setter принимает значение или функцию обновления,
// в том числе null и undefined. Возвращаемый кортеж нужен готовому интерфейсу.
function useDefault<T>(
  defaultValue: T,
  initialValue: T | (() => T),
): readonly [T, Dispatch<SetStateAction<T | null | undefined>>] {
  // void временно отмечает аргументы использованными.
  // Замени заглушку своей реализацией и при желании выведи тип самостоятельно.
  void [defaultValue, initialValue]
  throw new Error('Реализуй useDefault')
}

// Готовый интерфейс проверки использует результат твоего хука.
type User = {
  name: string
}

export function UseDefaultTask() {
  const initialUser: User = {name: 'Marshall'}
  const defaultUser: User = {name: 'Mathers'}
  const [user, setUser] = useDefault(defaultUser, initialUser)

  return (
    <div className="task-card">
      <div>User: {user.name}</div>
      <input onChange={(event) => setUser({name: event.target.value})} />
      <button type="button" onClick={() => setUser(null)}>
        reset
      </button>
    </div>
  )
}
