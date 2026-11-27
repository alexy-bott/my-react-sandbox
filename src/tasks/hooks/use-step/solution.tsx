import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

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

function useStep(maxStep: number): StepResult {
  const [step, update] = useState(1)
  const setStep: Dispatch<SetStateAction<number>> = (change) =>
    update((current) => {
      const next = typeof change === 'function' ? change(current) : change
      return next >= 1 && next <= maxStep ? next : current
    })
  return {
    step,
    setStep,
    next: () => setStep((s) => s + 1),
    previous: () => setStep((s) => s - 1),
    reset: () => setStep(1),
    hasNext: step < maxStep,
    hasPrevious: step > 1,
  }
}

// Готовый интерфейс проверки использует результат твоего хука.
export function UseStepTask() {
  const { step, next, previous, reset, setStep, hasNext, hasPrevious } =
    useStep(3)
  return (
    <div className="task-card">
      <p>Step {step}</p>
      <button onClick={previous} disabled={!hasPrevious}>
        Previous
      </button>{' '}
      <button onClick={next} disabled={!hasNext}>
        Next
      </button>{' '}
      <button onClick={reset}>Reset</button>{' '}
      <button onClick={() => setStep(3)}>Go to step 3</button>{' '}
      <button onClick={() => setStep((current) => current + 1)}>
        setStep: +1
      </button>
    </div>
  )
}
