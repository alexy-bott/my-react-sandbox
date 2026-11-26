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

  componentDidMount() {
    import.meta.hot?.on('vite:afterUpdate', this.handleHotUpdate)
  }

  componentWillUnmount() {
    import.meta.hot?.off('vite:afterUpdate', this.handleHotUpdate)
  }

  private handleHotUpdate = () => {
    // A lazy component can retain a failed module or render after Fast Refresh.
    // Reload only on recovery from an error; healthy tasks keep ordinary HMR.
    if (this.state.hasError) {
      window.location.reload()
    }
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
        <p>Продолжи работу в редакторе и сохрани файл. После обновления кода песочница попробует запустить задание снова. Если экран не обновился, перезагрузи страницу.</p>
        <button type="button" onClick={() => window.location.reload()}>
          Перезагрузить страницу
        </button>
      </div>
    )
  }
}
