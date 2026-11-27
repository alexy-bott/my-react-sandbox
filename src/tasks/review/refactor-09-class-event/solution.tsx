import { Component, type MouseEvent } from 'react';

type State = {
  event: MouseEvent<HTMLButtonElement> | null;
};

export default class App extends Component<Record<string, never>, State> {
  // Инициализируем состояние: до первого клика события ещё нет.
  state: State = { event: null };

  // Убрана лишняя закрывающая скобка из исходника.
  onClick = (event: MouseEvent<HTMLButtonElement>) => {
    this.setState({ event });
  };

  logEvent = () => {
    // Нельзя без проверки читать event.target до первого клика.
    if (this.state.event) {
      console.log(this.state.event.target);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>click me</button>
        <button onClick={this.logEvent}>log event</button>
      </div>
    );
  }
}

// В React DOM начиная с React 17 события не переиспользуются через pooling.
// event.persist() для актуальной версии проекта не требуется.
// target — элемент, на котором возникло событие, а currentTarget —
// элемент с обработчиком; currentTarget нужно читать во время обработки.
// Если нужен только target, можно сохранить его вместо целого события.
// Если данные используются исключительно для логирования и не влияют
// на UI, поле экземпляра может быть проще state. Здесь state сохранён,
// как и требование оставить классовый компонент.
