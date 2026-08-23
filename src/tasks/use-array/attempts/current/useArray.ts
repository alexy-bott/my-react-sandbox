export function useArray<T>(initialValue: T[]) {
  return {
    value: initialValue,
    push: (_item: T) => void _item,
    removeByIndex: (_index: number) => void _index,
  }
}
