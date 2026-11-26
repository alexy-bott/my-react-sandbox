import type {Dispatch, SetStateAction} from 'react'

export function useStep(maxStep: number) {
  void maxStep
  // Учебная заглушка. Реализуй состояние и методы по условию.
  const setStep: Dispatch<SetStateAction<number>> = () => undefined
  return {
    step: 1,
    next: () => undefined,
    previous: () => undefined,
    reset: () => undefined,
    setStep,
    hasNext: false,
    hasPrevious: false,
  }
}
