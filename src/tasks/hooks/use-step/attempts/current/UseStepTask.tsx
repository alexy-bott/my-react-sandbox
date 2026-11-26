import {useStep} from './useStep'

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
