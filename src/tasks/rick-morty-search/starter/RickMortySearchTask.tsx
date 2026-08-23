function getPeople(name: string, page = 1, options: RequestInit = {}) {
  return fetch(
    `https://rickandmortyapi.com/api/character?name=${name}&page=${page}`,
    options,
  ).then((response) => response.json())
}

function RickMortySearch() {
  void getPeople

  return '20 minutes adventure!'
}

export function RickMortySearchTask() {
  return (
    <div className="task-card">
      <RickMortySearch />
    </div>
  )
}
