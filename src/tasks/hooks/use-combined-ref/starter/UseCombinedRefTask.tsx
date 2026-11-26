import {forwardRef, useRef, useState, type ComponentPropsWithoutRef} from 'react'
import {useCombinedRef} from './useCombinedRef'

type InputProps = ComponentPropsWithoutRef<'input'> & {
  callbackRef: (node: HTMLInputElement | null) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {callbackRef, ...props},
  ref,
) {
  const localRef = useRef<HTMLInputElement>(null)
  const combinedRef = useCombinedRef(ref, localRef, callbackRef, null, undefined)

  return <input {...props} ref={combinedRef} />
})

export function UseCombinedRefTask() {
  const externalRef = useRef<HTMLInputElement>(null)
  const callbackNodeRef = useRef<HTMLInputElement | null>(null)
  const [status, setStatus] = useState('Нажмите «Проверить ref»')

  const checkRefs = () => {
    const objectConnected = externalRef.current !== null
    const callbackConnected = callbackNodeRef.current !== null
    setStatus(`object: ${objectConnected}, callback: ${callbackConnected}`)
  }

  return (
    <div className="task-card">
      <p>{status}</p>
      <Input
        ref={externalRef}
        callbackRef={(node) => {
          callbackNodeRef.current = node
        }}
        placeholder="Hello"
      />
      <button type="button" onClick={checkRefs}>
        Проверить ref
      </button>
    </div>
  )
}
