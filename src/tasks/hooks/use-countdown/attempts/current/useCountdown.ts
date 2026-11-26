export type UseCountdownOptions = {
  countStart: number
  countStop?: number
  intervalMs?: number
  isIncrement?: boolean
}

export function useCountdown({countStart}: UseCountdownOptions) {
  const start = () => undefined
  const stop = () => undefined
  const reset = () => undefined

  return {count: countStart, start, stop, reset}
}
