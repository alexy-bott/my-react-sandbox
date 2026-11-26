import type {Dispatch, SetStateAction} from 'react'

// Контракт: состояние шага, действия и признаки доступных переходов.
type StepResult = {
  step: number
  next: () => void
  previous: () => void
  reset: () => void
  setStep: Dispatch<SetStateAction<number>>
  hasNext: boolean
  hasPrevious: boolean
}

// Твоё решение: реализуй управление шагами по условию.
function useStep(maxStep: number): StepResult {
  // void отмечает аргумент использованным только до реализации.
  // Замени обе строки рабочим кодом.
  void maxStep
  throw new Error('Реализуй useStep')
}

// Готовый интерфейс проверки использует результат твоего хука.
export function UseStepTask() {
  const {step, next, previous, reset, setStep, hasNext, hasPrevious} = useStep(3)
  return (
    <div className="task-card">
      <p>Step {step}</p>
      <button onClick={previous} disabled={!hasPrevious}>Previous</button>{' '}
      <button onClick={next} disabled={!hasNext}>Next</button>{' '}
      <button onClick={reset}>Reset</button>{' '}
      <button onClick={() => setStep(3)}>Go to step 3</button>{' '}
      <button onClick={() => setStep(current => current + 1)}>setStep: +1</button>
    </div>
  )
}
