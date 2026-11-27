import { useCallback, useState } from 'react'
import type { RefCallback } from 'react'

// T — тип DOM-элемента. Callback-ref получает узел при подключении и участвует в его отключении.
function useHover<T extends Element>(): [RefCallback<T>, boolean] {
  const [hovered, setHovered] = useState(false)
  const ref = useCallback<RefCallback<T>>((node) => {
    if (!node) return
    const enter = () => setHovered(true)
    const leave = () => setHovered(false)
    node.addEventListener('mouseenter', enter)
    node.addEventListener('mouseleave', leave)
    return () => {
      node.removeEventListener('mouseenter', enter)
      node.removeEventListener('mouseleave', leave)
      setHovered(false)
    }
  }, [])
  return [ref, hovered]
}

// Готовый интерфейс проверки использует результат твоего хука.
export function UseHoverTask() {
  const [ref, hovered] = useHover<HTMLDivElement>()

  return (
    <div className="task-card">
      <div ref={ref} tabIndex={0}>
        {hovered ? 'Hovered' : 'Not hovered'}
      </div>
    </div>
  )
}
