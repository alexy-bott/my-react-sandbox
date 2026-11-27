export type CheckboxListProps = {
  items: string[]
  value: string[]
  onChange: (value: string[]) => void
}

export function CheckboxList({ items, value, onChange }: CheckboxListProps) {
  const allSelected =
    items.length > 0 && items.every((item) => value.includes(item))
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={() => onChange(allSelected ? [] : [...items])}
        />
        Выбрать все
      </label>
      {items.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            checked={value.includes(item)}
            onChange={(event) =>
              onChange(
                event.target.checked
                  ? [...value, item]
                  : value.filter((v) => v !== item),
              )
            }
          />
          {item}
        </label>
      ))}
    </div>
  )
}
