import {useKeyPress} from './useKeyPress'

export function UseKeyPressTask() {
  useKeyPress('a', (event) => {
    event.preventDefault()
    console.log('The "a" key was pressed')
  })

  return (
    <div className="task-card">
      <p>Нажми клавишу «a» и проверь сообщение в console.</p>
    </div>
  )
}
