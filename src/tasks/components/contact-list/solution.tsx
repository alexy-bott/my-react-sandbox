import { useState } from 'react'

export function ContactList() {
  const [contacts, setContacts] = useState<{ name: string; phone: string }[]>(
    [],
  )
  return (
    <section>
      <h1>Contact List</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const data = new FormData(event.currentTarget)
          setContacts([
            ...contacts,
            {
              name: String(data.get('name')),
              phone: String(data.get('phone')),
            },
          ])
          event.currentTarget.reset()
        }}
      >
        <input name="name" placeholder="Name" />
        <input name="phone" placeholder="Phone" />
        <button>Add</button>
      </form>
      <ul>
        {contacts.map((c, index) => (
          <li key={index}>
            {c.name}: {c.phone}
          </li>
        ))}
      </ul>
    </section>
  )
}
