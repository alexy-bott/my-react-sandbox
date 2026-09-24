import type {ComponentProps} from 'react'

type MainInputProps = {
  type: ComponentProps<'input'>['type']
}

const MainInput = ({type}: MainInputProps) => {
  return <input type={type} />
}

export const MultistepForm = () => {
  return (
    <div>
      <MainInput type="text" />
    </div>
  )
}

export function MultistepRegistrationFormTask() {
  return (
    <div className="task-card">
      <MultistepForm />
    </div>
  )
}
