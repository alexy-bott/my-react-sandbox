function PhoneNumberInput() {
  return <input type="text" />
}

export function PhoneNumberInputTask() {
  return (
    <div className="task-card">
      <div>Input</div>
      <PhoneNumberInput />
      <br />
      <br />
      <div>Your Input</div>
    </div>
  )
}
