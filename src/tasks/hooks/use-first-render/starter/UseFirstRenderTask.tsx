import {useState, type PropsWithChildren} from 'react'

// Твоё решение: вместо временного исключения реализуй проверку первого рендера.
function useFirstRender(): boolean {
  throw new Error('Реализуй useFirstRender')
}

// Готовый интерфейс: проверяет результат хука при рендерах.
function RenderAfterFirstRender({children}: PropsWithChildren) {
  const isFirstRender = useFirstRender()

  if (isFirstRender) {
    return 'Ничего'
  }

  return children
}

export function UseFirstRenderTask() {
  const [renderCount, setRenderCount] = useState(1)

  return (
    <div className="task-card">
      <p>Рендер: {renderCount}</p>
      <RenderAfterFirstRender>
        <p>Контент после первого рендера</p>
      </RenderAfterFirstRender>
      <button type="button" onClick={() => setRenderCount((count) => count + 1)}>
        Повторить рендер
      </button>
    </div>
  )
}
