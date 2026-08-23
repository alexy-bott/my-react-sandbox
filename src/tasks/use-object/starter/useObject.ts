export type PlainObject = Record<string, unknown>

export type ObjectUpdate<T extends PlainObject> = Partial<T> | ((current: T) => Partial<T>)

export function useObject<T extends PlainObject>(_initialValue: T = {} as T) {
  const value = _initialValue
  const setValue = (_update: ObjectUpdate<T>) => void _update

  return [value, setValue] as const
}
