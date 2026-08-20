export function SandboxGuideTask() {
  return (
    <article className="task-card">
      <header>
        <p className="task-note">
          Эта задача показывает полный цикл работы с задачей в песочнице.
        </p>
      </header>

      <ol>
        <li>
          <code>task.md</code>
          <p>Прочитай условие задачи.</p>
        </li>
        <li>
          <code>attempts/current/</code>
          <p>Здесь выполняй текущее решение.</p>
        </li>
        <li>
          <code>starter/</code>
          <p>Исходное состояние задачи. Используй его для сброса или нового прохождения.</p>
        </li>
        <li>
          <code>attempts/YYYY-MM-DD/</code>
          <p>
            Сюда можно сохранить завершённую попытку. При необходимости рядом добавляется{' '}
            <code>solution.md</code>.
          </p>
        </li>
      </ol>

      <hr />

      <section>
        <h2>Мини-задача</h2>
        <p>Есть счётчик со значением 0. По нажатию на кнопку значение увеличивается на 1.</p>
        <p>Текущее значение: 0</p>
        <button type="button">Увеличить</button>
      </section>
    </article>
  )
}
