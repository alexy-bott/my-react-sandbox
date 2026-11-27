# Каталог задач по результату, который сдаёт ученик

1. **Ревью кода.** Найти проблемы, объяснить причины и предложить или внести правки по исходному заданию.
2. **Исправление компонента под заданное поведение.** Сдать компонент, который делает конкретное X. Это включает явно заданное поведение рендеров и подписок. Браузер, консоль и чтение кода — способы проверки.

Основание — формулировки исходных задач, сохранённые при импорте, и локальные условия. При общем требовании «найти и исправить ошибки в коде» сценарий, добавленный при адаптации, не превращает его автоматически в отдельное функциональное требование. [Исходные задания по рефакторингу](https://teal-produce-2f9.notion.site/React-2531f21638f580649dd5efc34f3305bf).

## 1. Ревью кода — 35 основных папок

Отдельный вариант в общей папке — [№46. Ревью даты, ширины и счётчика](./server-date-review/review-46/task.md).

| Папка | Задача | Основание |
| --- | --- | --- |
| [react-refactoring](./react-refactoring/task.md) | Ревью React-компонента | № 1: рефакторинг компонента с сохранением контрактов. Рабочий экран можно использовать по желанию. |
| [refactor-02-buggy-todo](./refactor-02-buggy-todo/task.md) | BuggyTodo: загрузка и выполненные дела | Рефакторинг BuggyTodo; список и счётчик описывают исходный код. |
| [refactor-04-cart-scroll](./refactor-04-cart-scroll/task.md) | Корзина и панель при прокрутке | Рефакторинг компонента корзины. Прокрутка сама по себе не задаёт браузерную приёмку. |
| [refactor-05-list-mutation](./refactor-05-list-mutation/task.md) | Обновление первой строки списка | В источнике общее требование исправить код. Пример обновления строки поясняет дефект. |
| [refactor-07-memo-toggle](./refactor-07-memo-toggle/task.md) | Переключатель с memo-кнопкой | Исправить ошибку и оптимизировать рендер. |
| [refactor-09-class-event](./refactor-09-class-event/task.md) | Классовый компонент и сохранённое событие | Исправить код классового компонента. № 16 — тот же исходник. |
| [refactor-10-lazy-init](./refactor-10-lazy-init/task.md) | Дорогое вычисление начального состояния | Оптимизировать инициализацию; в той же папке вариант № 23. |
| [refactor-11-reverse-list](./refactor-11-reverse-list/task.md) | Переворот списка после выбора элемента | Найти ошибки в коде. Переворот списка — сценарий исходного фрагмента. |
| [refactor-12-counter-variable](./refactor-12-counter-variable/task.md) | Счётчик в локальной переменной | Исправить счётчик. Вариант № 38 просит предсказать результат клика и исправить. |
| [refactor-13-create-number](./refactor-13-create-number/task.md) | Добавление чисел в список | Найти ошибки в коде добавления числа. |
| [refactor-15-click-listener](./refactor-15-click-listener/task.md) | ClickListener: координата и отправка данных | Рефакторинг ClickListener; не требуется создавать реализацию внешнего API. |
| [refactor-17-click-intervals](./refactor-17-click-intervals/task.md) | PleaseReviewMe: список и интервалы по клику | Рефакторинг React-компонента с подпиской, интервалом и списком. |
| [refactor-18-counter-reset](./refactor-18-counter-reset/task.md) | Счётчик со сбросом на пяти | Источник просит найти и исправить ошибки. Проверка доступности сброса через UI добавлена в адаптации. |
| [refactor-19-timed-users](./refactor-19-timed-users/task.md) | Добавление пользователей за 15 секунд | Найти ошибки в коде; итоговый экран описывает сценарий. |
| [refactor-20-selected-post](./refactor-20-selected-post/task.md) | Выбор поста и данные пользователя | Найти ошибки в коде выбора поста. Обязательный браузерный запуск не зафиксирован. |
| [refactor-21-todo-search](./refactor-21-todo-search/task.md) | Рефакторинг поиска по списку дел | Рефакторинг списка. Отсутствующий Todo не требуется воссоздавать. |
| [refactor-22-context-performance](./refactor-22-context-performance/task.md) | Context: часы, счётчик и Fibonacci | Исправить ошибки и разобрать производительность. |
| [refactor-26-products-timer](./refactor-26-products-timer/task.md) | Товары, магазины и таймер | Найти ошибки в коде таймера и списка; в исходнике есть синтаксические ошибки. |
| [refactor-27-random-list-scroll](./refactor-27-random-list-scroll/task.md) | Асинхронный размер списка и прокрутка | Найти ошибки в коде асинхронного списка и прокрутки. |
| [refactor-28-refresh-tasks](./refactor-28-refresh-tasks/task.md) | Обновление списка задач клавишей r | Найти ошибки в коде; клавиша r описывает реализацию обновления. |
| [refactor-29-random-request-error](./refactor-29-random-request-error/task.md) | Случайное число: ошибка запроса и scroll | Найти ошибки в обработке запроса и подписки на прокрутку. |
| [refactor-30-infinite-scroll](./refactor-30-infinite-scroll/task.md) | Ревью useInfiniteScroll и его вызова | Определить число выводимых элементов и ошибки по данному коду. |
| [refactor-31-number-and-scroll](./refactor-31-number-and-scroll/task.md) | NumberAndScroll: асинхронный эффект | Найти ошибки в эффекте и обработчике прокрутки. |
| [refactor-32-user-profile](./refactor-32-user-profile/task.md) | Ревью UserProfile с userId | Найти ошибки в коде получения пользователя. |
| [refactor-34-interval-no-deps](./refactor-34-interval-no-deps/task.md) | Счётчик: исправление без зависимостей эффекта | Исправить ошибки при заданном ограничении на зависимости эффекта. |
| [refactor-35-count-display](./refactor-35-count-display/task.md) | CountDisplay и значение из props | Рефакторинг и исправление кода. Причину расхождения значений можно показать в разборе. |
| [refactor-36-rest-dependencies](./refactor-36-rest-dependencies/task.md) | Интервал и объект rest в зависимостях | Исправить и оптимизировать код с интервалом и зависимостями. |
| [refactor-37-heavy-send](./refactor-37-heavy-send/task.md) | Ввод текста и тяжёлая кнопка отправки | Обосновать оптимизацию перерисовок. |
| [refactor-39-timer-controls](./refactor-39-timer-controls/task.md) | Таймер: Start, Pause, Stop и пульсация | Найти и исправить ошибки в коде. Start, Pause и Stop — поведение предоставленного примера. |
| [refactor-42-companies-modules](./refactor-42-companies-modules/task.md) | Компании: сервис данных, store и компоненты | Рефакторинг четырёх связанных файлов; сохраняются границы модулей. |
| [refactor-44-game-effects](./refactor-44-game-effects/task.md) | Game: загрузка и fullscreenchange | Рефакторинг выданного компонента Game и его эффектов. |
| [refactor-47-enter-todos](./refactor-47-enter-todos/task.md) | Добавление задач через Enter и кнопку | Автор просит вывод о корректности. Enter и клик дают материал для ответа. |
| [user-profile-code-review](./user-profile-code-review/task.md) | Ревью компонента UserProfile | Предварительно 1: известна постановка «код-ревью и рефакторинг». Точная формулировка интервью утрачена, обязательность UI не установлена. |
| [user-search-code-review](./user-search-code-review/task.md) | Ревью компонента UserSearch | PR-ревью: объяснить существенные замечания, исправить код и сохранить API. |
| [users-page-production-review](./users-page-production-review/task.md) | Code review и рефакторинг UsersPage | PR-ревью двух компонентов, аргументация замечаний и итоговый код. |

## 2. Исправление компонента под заданное поведение — 12 папок

| Папка | Задача | Основание |
| --- | --- | --- |
| [conditional-input-reset](./conditional-input-reset/task.md) | Состояние поля при переключении интерфейса | Ввести текст, переключить checkbox, после правки увидеть пустое поле. |
| [profile-page-code-review](./profile-page-code-review/task.md) | Ревью и рефакторинг ProfilePage | Бизнес-требования: восстановить имя после сохранения и переход от загрузки к показу профиля. Доступность реального API не подтверждена. |
| [refactor-03-redux-todos](./refactor-03-redux-todos/task.md) | React + Redux: восстановить приложение со списком дел | Восстановить удалённую логику, чтобы Redux-приложение работало. Категория по цели; в поставке отсутствуют store, дочерние компоненты и CSS. |
| [refactor-06-numbers-render](./refactor-06-numbers-render/task.md) | Счётчик и независимый список numbers | Уменьшить лишние рендеры и вычисления списка. |
| [refactor-08-window-event](./refactor-08-window-event/task.md) | WindowEvent: лишние вызовы эффекта | Исправить зависимости подписки на событие; реализация Button не предоставлена. |
| [refactor-14-even-child](./refactor-14-even-child/task.md) | Ререндер SubElement только при чётном count | Ограничить ререндеры дочернего компонента, сохранив props. |
| [refactor-25-conditional-focus](./refactor-25-conditional-focus/task.md) | Фокус на появившемся поле | Появившееся поле должно сразу получить фокус. Особенно ясно в объединённом варианте № 33; для № 25 опора на локальное условие и исходник. |
| [refactor-40-car-garage](./refactor-40-car-garage/task.md) | Перемещение случайной машины в гараж | Доработать страницу: клик по покупке перемещает машину в гараж. Исходная реализация List отсутствует. |
| [refactor-41-state-mutation](./refactor-41-state-mutation/task.md) | Две кнопки: счётчик и имя | Определить, происходит ли рендер по второй кнопке, и восстановить её работу. Проверить обе кнопки — уточнение локального условия. |
| [refactor-43-child-render](./refactor-43-child-render/task.md) | Child без ререндера при вводе | Оптимизировать рендер Child при вводе; внешний вид страницы не является результатом оптимизации. |
| [refactor-45-disabled-submit](./refactor-45-disabled-submit/task.md) | Кнопка submit и три поля | Состояние кнопки submit должно зависеть от двух полей и чекбокса. |
| [server-date-review](./server-date-review/task.md) | Исправить приложение: дата, ширина и счётчик | № 24: исправить приложение с датой, изменением ширины и кнопкой счётчика. [Вариант № 46](./server-date-review/review-46/task.md) в этой же папке сформулирован как code review и сам по себе относится к категории 1. |

**Вне этой классификации:** [effect-lifecycle](./effect-lifecycle/task.md) — предсказать порядок событий, выполнить эксперимент и объяснить наблюдения. Это упражнение на жизненный цикл. Всего учтено 48 папок. Для № 24/46 варианты классифицируются по отдельности; папка посчитана по основной задаче. Для user-profile-code-review тип предварительный.
