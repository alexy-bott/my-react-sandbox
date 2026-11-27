function HierarchicalList() {
  const ListData = [
    {id: 1, name: 'Element 1', parentId: null},
    {id: 2, name: 'Element 2', parentId: 1},
    {id: 3, name: 'Element 3', parentId: 2},
    {id: 4, name: 'Element 4', parentId: 3},
    {id: 5, name: 'Element 5', parentId: 2},
  ]


  return (
    <ul>
      <li>{ListData[0].name}</li>
    </ul>
  )
}

export function HierarchicalListTask() {
  return (
    <div className="task-card">
      <HierarchicalList />
    </div>
  )
}
