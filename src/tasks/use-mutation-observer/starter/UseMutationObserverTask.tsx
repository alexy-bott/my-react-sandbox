import {useCallback, useState} from 'react'
import {useMutationObserver} from './useMutationObserver'

const observerOptions: MutationObserverInit = {
  childList: true,
  characterData: true,
  subtree: true,
}

export function UseMutationObserverTask() {
  const [target, setTarget] = useState<HTMLDivElement | null>(null)
  const [text, setText] = useState('Исходный текст')
  const [mutationCount, setMutationCount] = useState(0)
  const handleMutation = useCallback<MutationCallback>(() => {
    setMutationCount((count) => count + 1)
  }, [])

  useMutationObserver(target, handleMutation, observerOptions)

  return (
    <div className="task-card">
      <div ref={setTarget}>{text}</div>
      <p>Вызовов observer: {mutationCount}</p>
      <button type="button" onClick={() => setText((value) => `${value}!`)}>
        Изменить DOM
      </button>
    </div>
  )
}
