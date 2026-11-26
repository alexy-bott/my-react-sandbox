import type {RefCallback} from 'react'

// T — тип DOM-элемента. Callback-ref получает узел при подключении и участвует в его отключении.
function useHover<T extends Element>(): [RefCallback<T>, boolean] {
  // Реализуй хук вместо этой заглушки.
  throw new Error('Реализуй useHover')
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
