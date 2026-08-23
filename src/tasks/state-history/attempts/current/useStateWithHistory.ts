type StateHistoryTuple<T> = [
  state: T,
  setState: (value: T) => void,
  goBack: () => void,
  goForward: () => void,
  history: T[],
]

export function useStateWithHistory<T>(initialState: T): StateHistoryTuple<T> {
  const setState = (value: T) => void value
  const goBack = () => undefined
  const goForward = () => undefined

  return [initialState, setState, goBack, goForward, [initialState]]
}
