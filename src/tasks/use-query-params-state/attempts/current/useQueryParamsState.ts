import type {SetStateAction} from 'react'

type QueryParamConfig<T> = {
  parse: (value: string) => T
  serialize: (value: T) => string
  default: T
}

type QueryParamsSchema = Record<string, QueryParamConfig<unknown>>

type QueryParamsState<TSchema extends QueryParamsSchema> = {
  [TKey in keyof TSchema]: TSchema[TKey] extends QueryParamConfig<infer TValue>
    ? TValue
    : never
}

type SetQueryParams<TSchema extends QueryParamsSchema> = (
  value: SetStateAction<QueryParamsState<TSchema>>,
  options?: {replace?: boolean},
) => void

export function useQueryParamsState<TSchema extends QueryParamsSchema>(
  _schema: TSchema,
): readonly [QueryParamsState<TSchema>, SetQueryParams<TSchema>] {
  void _schema
  const state = {} as QueryParamsState<TSchema>
  const setState: SetQueryParams<TSchema> = (_value, _options) => {
    void [_value, _options]
  }

  return [state, setState] as const
}
