type StateHistoryTuple<T> = [
  state: T,
  setState: (value: T) => void,
  goBack: () => void,
  goForward: () => void,
  history: T[],
]

export function useStateWithHistory<T>(initialState: T): StateHistoryTuple<T> {
  void initialState
  throw new Error('Реализуй useStateWithHistory')
}
