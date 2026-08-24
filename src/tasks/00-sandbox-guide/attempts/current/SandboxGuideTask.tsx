import {useState} from 'react'

export function SandboxGuideTask() {
  const [count, setCount] = useState(0)

  return (
    <article className="task-card">
      <header>
        <p className="task-note">
          Я добавил эту задачу как короткую памятку по работе с песочницей. Решать её
          самостоятельно не нужно.
        </p>
      </header>

      <ol>
        <li>
          <code>task.md</code>
          <p>Прочитай условие задачи.</p>
        </li>
        <li>
          <code>attempts/current/</code>
          <p>Здесь ты решаешь задачу.</p>
        </li>
        <li>
          <code>hint.md</code> <span className="task-note">(необязательно)</span>
          <p>Загляни сюда, если файл есть и тебе нужна подсказка.</p>
        </li>
        <li>
          <code>starter/</code>
          <p>Исходная версия для сброса. Не редактируй её.</p>
        </li>
        <li>
          <code>attempts/YYYY-MM-DD/</code>
          <p>
            Сюда можно скопировать завершённую попытку. <code>solution.md</code> можно добавить
            по желанию.
          </p>
        </li>
      </ol>

      <hr />

      <section>
        <h2>Добавить свою задачу</h2>
        <p>
          <code>pnpm task:new</code>
        </p>
        <p>
          Введи название, выбери категорию или нажми Enter для категории «Разное». Остальное
          команда подготовит сама.
        </p>
      </section>

      <hr />

      <section>
        <h2>Мини-задача</h2>
        <p>Есть счётчик со значением 0. По нажатию на кнопку значение увеличивается на 1.</p>
        <p>Текущее значение: {count}</p>
        <button onClick={() => setCount((currentCount) => currentCount + 1)} type="button">
          Увеличить
        </button>
      </section>
    </article>
  )
}
