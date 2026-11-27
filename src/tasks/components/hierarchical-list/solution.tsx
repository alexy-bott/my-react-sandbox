import type { ReactNode } from 'react'
function HierarchicalList() {
  const ListData = [
    { id: 1, name: 'Element 1', parentId: null },
    { id: 2, name: 'Element 2', parentId: 1 },
    { id: 3, name: 'Element 3', parentId: 2 },
    { id: 4, name: 'Element 4', parentId: 3 },
    { id: 5, name: 'Element 5', parentId: 2 },
  ]

  function children(parentId: number | null): ReactNode {
    const rows = ListData.filter((item) => item.parentId === parentId)
    return rows.length ? (
      <ul>
        {rows.map((item) => (
          <li key={item.id}>
            {item.name}
            {children(item.id)}
          </li>
        ))}
      </ul>
    ) : null
  }
  return children(null)
}

export function HierarchicalListTask() {
  return (
    <div className="task-card">
      <HierarchicalList />
    </div>
  )
}
