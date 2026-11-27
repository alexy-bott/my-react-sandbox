import { useEffect, useState } from 'react'
import type { SetStateAction } from 'react'

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
  options?: { replace?: boolean },
) => void

export function useQueryParamsState<TSchema extends QueryParamsSchema>(
  schema: TSchema,
): readonly [QueryParamsState<TSchema>, SetQueryParams<TSchema>] {
  type State = QueryParamsState<TSchema>
  function fromUrl(): State {
    const params = new URLSearchParams(location.search)
    return Object.fromEntries(
      Object.entries(schema).map(([key, config]) => {
        const raw = params.get(key)
        return [key, raw === null ? config.default : config.parse(raw)]
      }),
    ) as State
  }
  const [state, setState] = useState(fromUrl)
  useEffect(() => {
    const sync = () => setState(fromUrl())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [schema])
  const update: SetQueryParams<TSchema> = (change, options) => {
    const next = typeof change === 'function' ? change(fromUrl()) : change
    const url = new URL(location.href)
    for (const key of Object.keys(schema))
      url.searchParams.set(key, schema[key].serialize(next[key]))
    if (options?.replace) history.replaceState(history.state, '', url)
    else history.pushState(history.state, '', url)
    setState(next)
  }
  return [state, update]
}
