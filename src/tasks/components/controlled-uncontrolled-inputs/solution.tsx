import { useRef, useState } from 'react'
export function ControlledUncontrolledInputsTask() {
  const [name, setName] = useState('')
  const phone = useRef<HTMLInputElement>(null)
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input placeholder="Phone" ref={phone} />
      <button onClick={() => console.log(name, phone.current?.value)}>
        Add
      </button>
    </div>
  )
}
