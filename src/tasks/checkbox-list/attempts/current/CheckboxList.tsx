export type CheckboxListProps = {
  items: string[]
  value: string[]
  onChange: (value: string[]) => void
}

export function CheckboxList({items}: CheckboxListProps) {
  return (
    <ul>
      <li>Выбрать все</li>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
