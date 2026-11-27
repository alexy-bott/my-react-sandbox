import {useState} from 'react'

function useFetch<T>(_url: string): {data: T | null; loading:boolean; error:string | null} {
  throw new Error('Реализуй useFetch')
}

// Добавь загрузку данных по url и отображай состояния хука в компоненте ниже.
const examples = [
  {name:'Первый запрос', url:'data:application/json,%7B%22name%22%3A%22Anna%22%7D'},
  {name:'Другой URL', url:'data:application/json,%7B%22name%22%3A%22Max%22%7D'},
  {name:'Ошибка JSON', url:'data:application/json,invalid'},
]

export function UseFetchTask() {
  const [url, setUrl] = useState(examples[0].url)
  const {data, loading, error} = useFetch<{name:string}>(url)
  return <section>
    {examples.map(example => <button key={example.name} onClick={() => setUrl(example.url)}>{example.name}</button>)}
    {loading && <p>Загрузка...</p>}
    {error && <p>{error}</p>}
    {data && <p>{data.name}</p>}
  </section>
}
