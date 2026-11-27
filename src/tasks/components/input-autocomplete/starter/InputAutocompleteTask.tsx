type PeopleResponse = {
  next: string | null
  results: Array<{name: string; url: string}>
}

export function getPeople(search: string, page = 1, options: RequestInit = {}) {
  return fetch(
    `https://swapi.dev/api/people?search=${search}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .then((data: PeopleResponse) => data)
}

function InputAutocomplete() {

  return 'Hello there!'
}

export function InputAutocompleteTask() {
  return (
    <div className="task-card">
      <InputAutocomplete />
    </div>
  )
}
