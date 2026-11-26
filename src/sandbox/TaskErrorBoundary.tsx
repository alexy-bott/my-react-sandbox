import {Component, type ReactNode} from 'react'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
  error: unknown
}

export class TaskErrorBoundary extends Component<Props, State> {
  state: State = {hasError: false, error: undefined}

  static getDerivedStateFromError(error: unknown): State {
    return {hasError: true, error}
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    const {error} = this.state

    return (
      <div className="task-card">
        <p>Задание пока не отображается.</p>
        <p>{error instanceof Error ? error.message : String(error)}</p>
        <p>Продолжи работу в редакторе. После исправления сохрани файл. Если экран не обновился, перезагрузи страницу.</p>
        <button type="button" onClick={() => window.location.reload()}>
          Перезагрузить страницу
        </button>
      </div>
    )
  }
}
