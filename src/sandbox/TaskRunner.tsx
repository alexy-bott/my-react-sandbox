import {Suspense, type ComponentType} from 'react'
import {TaskErrorBoundary} from './TaskErrorBoundary'

type Props = {
  taskId: string
  component: ComponentType
}

export function TaskRunner({taskId, component: ActiveTaskComponent}: Props) {
  return (
    <TaskErrorBoundary key={taskId}>
      <Suspense fallback={<p>Загрузка задания...</p>}>
        <ActiveTaskComponent />
      </Suspense>
    </TaskErrorBoundary>
  )
}
