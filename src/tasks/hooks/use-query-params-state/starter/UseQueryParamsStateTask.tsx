import {useQueryParamsState} from './useQueryParamsState'

const schema = {
  page: {parse: Number, serialize: String, default: 1},
  q: {parse: String, serialize: String, default: ''},
}

export function UseQueryParamsStateTask() {
  const [queryParams, setQueryParams] = useQueryParamsState(schema)

  return (
    <div className="task-card">
      <button
        type="button"
        onClick={() => setQueryParams((state) => ({...state, page: state.page + 1}))}
      >
        Следующая страница
      </button>
      <label>
        Поиск
        <input
          value={queryParams.q}
          onChange={(event) => {
            setQueryParams(
              (state) => ({...state, q: event.target.value}),
              {replace: true},
            )
          }}
          placeholder="Значение query-параметра"
        />
      </label>
      <p>Страница: {queryParams.page}</p>
      <p>Запрос: {queryParams.q || 'пусто'}</p>
    </div>
  )
}
