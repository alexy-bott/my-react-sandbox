function ContactList() {
  return (
    <div>
      <h1>Contact List</h1>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <button>Add</button>
      </div>
    </div>
  )
}

export function ContactListTask() {
  return (
    <div className="task-card">
      <ContactList />
    </div>
  )
}
