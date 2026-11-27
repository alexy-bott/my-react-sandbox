import {lazy, type ComponentType} from 'react'
import {SandboxGuideTask} from './00-sandbox-guide/active'
import {UseDebounceThrottleEffectTask} from './hooks/use-debounce-throttle-effect/active'
import {EffectLifecycleTask} from './review/effect-lifecycle/active'
import {UseBreakpointTask} from './hooks/use-breakpoint/active'
import {UseClickOutsideTask} from './hooks/use-click-outside/active'
import {UseCombinedRefTask} from './hooks/use-combined-ref/active'
import {UseEffectOnceTask} from './hooks/use-effect-once/active'
import {UseEventListenerTask} from './hooks/use-event-listener/active'
import {UseFetchTask} from './hooks/use-fetch/active'
import {UseIsMountedSafeStateTask} from './hooks/use-is-mounted-safe-state/active'
import {UseKeyPressTask} from './hooks/use-key-press/active'
import {UseMutationObserverTask} from './hooks/use-mutation-observer/active'
import {UseQueryParamsStateTask} from './hooks/use-query-params-state/active'
import {UseMinMatchMediaTask} from './hooks/use-min-match-media/active'
import {TimeoutBasicsTask} from './js-basics/timeout-basics/active'
import {UseThrottleTask} from './hooks/use-throttle/active'

export type TaskCategory =
  | 'components'
  | 'hooks'
  | 'review'
  | 'js-basics'

export type Task = {
  id: string
  title: string
  command?: string
  component?: ComponentType
  category?: TaskCategory
}

export const tasks: Task[] = [
  {
    id: '00-sandbox-guide',
    title: 'Как работать с задачами',
    component: SandboxGuideTask,
  },
  {
    id: 'timer',
    title: 'Реализовать таймер',
    component: lazy(() => import('./components/timer/TimerTask').then(m => ({default: m.TimerTask}))),
    category: 'components',
  },
  {
    id: 'todo',
    title: 'Доработать to-do list',
    component: lazy(() => import('./components/todo/TodoTask').then(m => ({default: m.TodoTask}))),
    category: 'components',
  },
  {
    id: 'use-fetch',
    title: 'Реализовать хук useFetch',
    component: UseFetchTask,
    category: 'hooks',
  },
  {
    id: 'base-fetch',
    title: 'Реализовать компонент с fetch',
    component: lazy(() =>
      import('./components/base-fetch/BaseFetch').then(module => ({default: module.BaseFetch})),
    ),
    category: 'components',
  },
  {
    id: 'supplier-offers-filters',
    title: 'Фильтрация предложений поставщиков',
    component: lazy(() => import('./components/supplier-offers-filters/SupplierOffersFilters').then(m => ({default: m.SupplierOffersFilters}))),
    category: 'components',
  },
  {
    id: 'card-and-filters',
    title: 'Карточки магазина и поиск',
    component: lazy(() => import('./components/card-and-filters/CardWildberries')),
    category: 'components',
  },
  {
    id: 'adaptive-overflow-menu',
    title: 'Адаптивное меню с dropdown',
    component: lazy(() => import('./components/adaptive-overflow-menu/AdaptiveOverflowMenuTask').then(m => ({default: m.AdaptiveOverflowMenuTask}))),
    category: 'components',
  },
  {
    id: 'effect-lifecycle',
    title: 'Жизненный цикл вложенного компонента',
    component: EffectLifecycleTask,
    category: 'review',
  },
  {
    id: 'conditional-input-reset',
    title: 'Состояние поля при переключении',
    component: lazy(() => import('./review/conditional-input-reset/ConditionalInputsTask').then(m => ({default: m.ConditionalInputsTask}))),
    category: 'review',
  },
  {
    id: 'debounced-product-search',
    title: 'Поиск товаров при вводе',
    component: lazy(() => import('./components/debounced-product-search/ProductSearchTask').then(m => ({default: m.ProductSearchTask}))),
    category: 'components',
  },
  {
    id: 'random-game-board',
    title: 'Генератор игрового поля',
    component: lazy(() => import('./components/random-game-board/RandomGameBoardTask').then(m => ({default: m.RandomGameBoardTask}))),
    category: 'components',
  },
  {
    id: 'checkbox-list',
    title: 'Управляемый список флажков',
    component: lazy(() => import('./components/checkbox-list/CheckboxListTask').then(m => ({default: m.CheckboxListTask}))),
    category: 'components',
  },
  {
    id: 'state-history',
    title: 'Состояние с историей изменений',
    component: lazy(() =>
      import('./hooks/state-history/StateHistoryTask').then(module => ({default: module.StateHistoryTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'react-refactoring',
    title: 'Ревью React-компонента',
    category: 'review',
  },
  {
    id: 'nested-comments',
    title: 'Список вложенных комментариев',
    component: lazy(() => import('./components/nested-comments/NestedCommentsTask').then(m => ({default: m.NestedCommentsTask}))),
    category: 'components',
  },
  {
    id: 'cross-tab-input-sync',
    title: 'Синхронизация текста между вкладками',
    component: lazy(() => import('./components/cross-tab-input-sync/CrossTabInputSyncTask').then(m => ({default: m.CrossTabInputSyncTask}))),
    category: 'components',
  },
  {
    id: 'dynamic-form',
    title: 'Динамическая форма',
    component: lazy(() => import('./components/dynamic-form/DynamicFormTask').then(m => ({default: m.DynamicFormTask}))),
    category: 'components',
  },
  {
    id: 'hierarchical-list',
    title: 'Вложенный список из иерархии',
    component: lazy(() => import('./components/hierarchical-list/HierarchicalListTask').then(m => ({default: m.HierarchicalListTask}))),
    category: 'components',
  },
  {
    id: 'infinite-scroll-posts',
    title: 'Бесконечная загрузка постов',
    component: lazy(() => import('./components/infinite-scroll-posts/InfiniteScrollPostsTask').then(m => ({default: m.InfiniteScrollPostsTask}))),
    category: 'components',
  },
  {
    id: 'contact-list',
    title: 'Список контактов',
    component: lazy(() => import('./components/contact-list/ContactList').then(m => ({default: m.ContactList}))),
    category: 'components',
  },
  {
    id: 'controlled-uncontrolled-inputs',
    title: 'Контролируемое и неконтролируемое поля',
    component: lazy(() => import('./components/controlled-uncontrolled-inputs/ControlledUncontrolledInputsTask').then(m => ({default: m.ControlledUncontrolledInputsTask}))),
    category: 'components',
  },
  {
    id: 'rick-morty-search',
    title: 'Поиск персонажей Rick and Morty',
    component: lazy(() => import('./components/rick-morty-search/RickMortySearchTask').then(m => ({default: m.RickMortySearchTask}))),
    category: 'components',
  },
  {
    id: 'clock-metrics',
    title: 'Часы с метриками',
    component: lazy(() => import('./components/clock-metrics/ClockMetricsTask').then(m => ({default: m.ClockMetricsTask}))),
    category: 'components',
  },
  {
    id: 'product-list-filtering',
    title: 'Список и фильтрация товаров',
    component: lazy(() => import('./components/product-list-filtering/ProductListFilteringTask').then(m => ({default: m.ProductListFilteringTask}))),
    category: 'components',
  },
  {
    id: 'user-data-loader',
    title: 'Загрузка данных пользователя',
    component: lazy(() => import('./components/user-data-loader/UserDataLoaderTask').then(m => ({default: m.UserDataLoaderTask}))),
    category: 'components',
  },
  {
    id: 'crush-the-mole',
    title: 'Crush the mole',
    component: lazy(() => import('./components/crush-the-mole/CrushTheMoleTask').then(m => ({default: m.CrushTheMoleTask}))),
    category: 'components',
  },
  {
    id: 'input-autocomplete',
    title: 'Автодополнение имён персонажей',
    component: lazy(() => import('./components/input-autocomplete/InputAutocompleteTask').then(m => ({default: m.InputAutocompleteTask}))),
    category: 'components',
  },
  {
    id: 'user-table-city-filter',
    title: 'Таблица с фильтрацией по городу',
    component: lazy(() => import('./components/user-table-city-filter/UserTableCityFilterTask').then(m => ({default: m.UserTableCityFilterTask}))),
    category: 'components',
  },
  {
    id: 'phone-number-input',
    title: 'Форматирование номера телефона',
    component: lazy(() => import('./components/phone-number-input/PhoneNumberInputTask').then(m => ({default: m.PhoneNumberInputTask}))),
    category: 'components',
  },
  {
    id: 'countdown-timer',
    title: 'Таймер с обратным отсчётом',
    component: lazy(() => import('./components/countdown-timer/CountdownTimerTask').then(m => ({default: m.CountdownTimerTask}))),
    category: 'components',
  },
  {
    id: 'user-list-filter',
    title: 'Список пользователей с фильтром',
    component: lazy(() =>
      import('./components/user-list-filter/UserListFilterTask').then(module => ({default: module.UserList})),
    ),
    category: 'components',
  },
  {
    id: 'tic-tac-toe',
    title: 'Крестики-нолики с историей',
    component: lazy(() => import('./components/tic-tac-toe/TicTacToeTask').then(m => ({default: m.TicTacToeTask}))),
    category: 'components',
  },
  {
    id: 'user-list-advanced',
    title: 'Расширенный список пользователей',
    component: lazy(() => import('./components/user-list-advanced/UserListAdvancedTask').then(m => ({default: m.UserListAdvancedTask}))),
    category: 'components',
  },
  {
    id: 'use-debounce-throttle-effect',
    title: 'Эффекты с debounce и throttle',
    component: UseDebounceThrottleEffectTask,
    category: 'hooks',
  },
  {
    id: 'use-toggle',
    title: 'Булево состояние с переключением',
    component: lazy(() =>
      import('./hooks/use-toggle/UseToggleTask').then(({UseToggleTask}) => ({default: UseToggleTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-countdown',
    title: 'Управление обратным отсчётом',
    component: lazy(() =>
      import('./hooks/use-countdown/UseCountdownTask').then(module => ({default: module.UseCountdownTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-interval',
    title: 'Интервальный вызов callback',
    component: lazy(() =>
      import('./hooks/use-interval/UseIntervalTask').then(module => ({default: module.UseIntervalTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-object',
    title: 'Состояние объекта с объединением',
    component: lazy(() =>
      import('./hooks/use-object/UseObjectTask').then(module => ({default: module.UseObjectTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-click-outside',
    title: 'Обработка клика вне элемента',
    component: UseClickOutsideTask,
    category: 'hooks',
  },
  {
    id: 'quiz-app',
    title: 'Квиз с подсчётом результатов',
    component: lazy(() => import('./components/quiz-app/QuizTask').then(m => ({default: m.QuizTask}))),
    category: 'components',
  },
  {
    id: 'use-default',
    title: 'Состояние со значением по умолчанию',
    component: lazy(() =>
      import('./hooks/use-default/UseDefaultTask').then(module => ({default: module.UseDefaultTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-key-press',
    title: 'Обработка нажатия клавиши',
    component: UseKeyPressTask,
    category: 'hooks',
  },
  {
    id: 'modal',
    title: 'Переиспользуемое модальное окно',
    component: lazy(() => import('./components/modal/ModalTask').then(m => ({default: m.ModalTask}))),
    category: 'components',
  },
  {
    id: 'use-breakpoint',
    title: 'Определение текущего breakpoint',
    component: UseBreakpointTask,
    category: 'hooks',
  },
  {
    id: 'use-boolean',
    title: 'Управление булевым состоянием',
    component: lazy(() =>
      import('./hooks/use-boolean/UseBooleanTask').then(module => ({default: module.UseBooleanTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-array',
    title: 'Управление состоянием массива',
    component: lazy(() =>
      import('./hooks/use-array/UseArrayTask').then(module => ({default: module.UseArrayTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-state-with-reset',
    title: 'Состояние с функцией сброса',
    component: lazy(() =>
      import('./hooks/use-state-with-reset/UseStateWithResetTask').then(module => ({default: module.UseStateWithResetTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-map',
    title: 'Управление состоянием Map',
    component: lazy(() =>
      import('./hooks/use-map/UseMapTask').then(module => ({default: module.UseMapTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-previous',
    title: 'Хранение предыдущего значения',
    component: lazy(() =>
      import('./hooks/use-previous/UsePreviousTask').then(module => ({default: module.UsePreviousTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-first-render',
    title: 'Определение первого рендера',
    component: lazy(() =>
      import('./hooks/use-first-render/UseFirstRenderTask').then(module => ({default: module.UseFirstRenderTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-latest',
    title: 'Ref с актуальным значением',
    component: lazy(() =>
      import('./hooks/use-latest/UseLatestTask').then(module => ({default: module.UseLatestTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-combined-ref',
    title: 'Объединение нескольких ref',
    component: UseCombinedRefTask,
    category: 'hooks',
  },
  {
    id: 'use-focus',
    title: 'Программная установка фокуса',
    component: lazy(() =>
      import('./hooks/use-focus/UseFocusTask').then(module => ({default: module.UseFocusTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-hover',
    title: 'Отслеживание наведения',
    component: lazy(() =>
      import('./hooks/use-hover/UseHoverTask').then(module => ({default: module.UseHoverTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-effect-once',
    title: 'Однократный эффект',
    component: UseEffectOnceTask,
    category: 'hooks',
  },
  {
    id: 'use-is-mounted-safe-state',
    title: 'Проверка монтирования и безопасное состояние',
    component: UseIsMountedSafeStateTask,
    category: 'hooks',
  },
  {
    id: 'use-query-params-state',
    title: 'Состояние в query-параметре',
    component: UseQueryParamsStateTask,
    category: 'hooks',
  },
  {
    id: 'use-mutation-observer',
    title: 'Наблюдение за DOM-изменениями',
    component: UseMutationObserverTask,
    category: 'hooks',
  },
  {
    id: 'use-event-listener',
    title: 'Универсальный обработчик событий',
    component: UseEventListenerTask,
    category: 'hooks',
  },
  {
    id: 'user-search-code-review',
    title: 'Ревью компонента UserSearch',
    category: 'review',
  },
  {
    id: 'use-min-match-media',
    title: 'Реализовать хук useMinMatchMedia',
    component: UseMinMatchMediaTask,
    category: 'hooks',
  },
  {
    id: 'users-page-production-review',
    title: 'Production review UsersPage',
    category: 'review',
  },
  {
    id: 'multistep-registration-form',
    title: 'Многошаговая форма регистрации',
    component: lazy(() => import('./components/multistep-registration-form/MultistepRegistrationFormTask').then(m => ({default: m.MultistepRegistrationFormTask}))),
    category: 'components',
  },
  {
    id: 'timeout-basics',
    title: 'Первый отложенный вызов',
    command: 'node src/tasks/js-basics/timeout-basics/attempts/current/timer.js',
    component: TimeoutBasicsTask,
    category: 'js-basics',
  },
  {
    id: 'mocked-data-list',
    title: 'Список данных через асинхронный мок',
    component: lazy(() =>
      import('./components/mocked-data-list/MockedDataListTask').then(module => ({default: module.MockedDataListTask})),
    ),
    category: 'components',
  },
  {
    id: 'memory-game',
    title: 'Memory Game — найди пары',
    component: lazy(() => import('./components/memory-game/MemoryGameTask').then(m => ({default: m.MemoryGameTask}))),
    category: 'components',
  },
  {
    id: 'use-step',
    title: 'Управление шагами — useStep',
    component: lazy(() =>
      import('./hooks/use-step/UseStepTask').then(module => ({default: module.UseStepTask})),
    ),
    category: 'hooks',
  },
  {
    id: 'use-throttle',
    title: 'Ограничение обновлений значения — useThrottle',
    component: UseThrottleTask,
    category: 'hooks',
  },
  {
    id: 'server-date-review',
    title: 'Исправить приложение: дата, ширина и счётчик',
    // @ts-expect-error Исходный JSX упражнения не имеет декларации типов.
    component: lazy(() => import('./review/server-date-review/App.jsx')),
    category: 'review',
  },
  {
    id: 'refactor-02-buggy-todo',
    title: 'Рефакторинг 02: BuggyTodo: загрузка и выполненные дела',
    category: 'review',
  },
  {
    id: 'refactor-03-redux-todos',
    title: 'Рефакторинг 03: React + Redux: восстановить приложение со списком дел',
    category: 'review',
  },
  {
    id: 'refactor-04-cart-scroll',
    title: 'Рефакторинг 04: Корзина и панель при прокрутке',
    category: 'review',
  },
  {
    id: 'refactor-05-list-mutation',
    title: 'Рефакторинг 05: Обновление первой строки списка',
    category: 'review',
  },
  {
    id: 'refactor-06-numbers-render',
    // @ts-expect-error Исходный JSX упражнения не имеет декларации типов.
    component: lazy(() => import('./review/refactor-06-numbers-render/Refactor06Task.jsx')),
    title: 'Рефакторинг 06: Счётчик и независимый список numbers',
    category: 'review',
  },
  {
    id: 'refactor-07-memo-toggle',
    title: 'Рефакторинг 07: Переключатель с memo-кнопкой',
    category: 'review',
  },
  {
    id: 'refactor-08-window-event',
    title: 'Рефакторинг 08: WindowEvent: лишние вызовы эффекта',
    category: 'review',
  },
  {
    id: 'refactor-09-class-event',
    title: 'Рефакторинг 09: Классовый компонент и сохранённое событие',
    category: 'review',
  },
  {
    id: 'refactor-10-lazy-init',
    title: 'Рефакторинг 10: Дорогое вычисление начального состояния',
    category: 'review',
  },
  {
    id: 'refactor-11-reverse-list',
    title: 'Рефакторинг 11: Переворот списка после выбора элемента',
    category: 'review',
  },
  {
    id: 'refactor-12-counter-variable',
    title: 'Рефакторинг 12: Счётчик в локальной переменной',
    category: 'review',
  },
  {
    id: 'refactor-13-create-number',
    title: 'Рефакторинг 13: Добавление чисел в список',
    category: 'review',
  },
  {
    id: 'refactor-14-even-child',
    // @ts-expect-error Исходный JSX упражнения не имеет декларации типов.
    component: lazy(() => import('./review/refactor-14-even-child/Refactor14Task.jsx')),
    title: 'Рефакторинг 14: Ререндер SubElement только при чётном count',
    category: 'review',
  },
  {
    id: 'refactor-15-click-listener',
    title: 'Рефакторинг 15: ClickListener: координата и отправка данных',
    category: 'review',
  },
  {
    id: 'refactor-17-click-intervals',
    title: 'Рефакторинг 17: PleaseReviewMe: список и интервалы по клику',
    category: 'review',
  },
  {
    id: 'refactor-18-counter-reset',
    title: 'Рефакторинг 18: Счётчик со сбросом на пяти',
    category: 'review',
  },
  {
    id: 'refactor-19-timed-users',
    title: 'Рефакторинг 19: Добавление пользователей за 15 секунд',
    category: 'review',
  },
  {
    id: 'refactor-20-selected-post',
    title: 'Рефакторинг 20: Выбор поста и данные пользователя',
    category: 'review',
  },
  {
    id: 'refactor-21-todo-search',
    title: 'Рефакторинг 21: Рефакторинг поиска по списку дел',
    category: 'review',
  },
  {
    id: 'refactor-22-context-performance',
    title: 'Рефакторинг 22: Context: часы, счётчик и Fibonacci',
    category: 'review',
  },
  {
    id: 'refactor-25-conditional-focus',
    title: 'Рефакторинг 25: Фокус на появившемся поле',
    // @ts-expect-error Исходный JSX упражнения не имеет декларации типов.
    component: lazy(() => import('./review/refactor-25-conditional-focus/App.jsx')),
    category: 'review',
  },
  {
    id: 'refactor-25-conditional-focus/variant-33',
    title: 'Рефакторинг 33: Фокус при переключении поля',
    // @ts-expect-error Исходный JSX упражнения не имеет декларации типов.
    component: lazy(() => import('./review/refactor-25-conditional-focus/variant-33/ToggleComponent.jsx')),
    category: 'review',
  },
  {
    id: 'refactor-26-products-timer',
    title: 'Рефакторинг 26: Товары, магазины и таймер',
    category: 'review',
  },
  {
    id: 'refactor-27-random-list-scroll',
    title: 'Рефакторинг 27: Асинхронный размер списка и прокрутка',
    category: 'review',
  },
  {
    id: 'refactor-28-refresh-tasks',
    title: 'Рефакторинг 28: Обновление списка задач клавишей r',
    category: 'review',
  },
  {
    id: 'refactor-29-random-request-error',
    title: 'Рефакторинг 29: Случайное число: ошибка запроса и scroll',
    category: 'review',
  },
  {
    id: 'refactor-30-infinite-scroll',
    title: 'Рефакторинг 30: Ревью useInfiniteScroll и его вызова',
    category: 'review',
  },
  {
    id: 'refactor-31-number-and-scroll',
    title: 'Рефакторинг 31: NumberAndScroll: асинхронный эффект',
    category: 'review',
  },
  {
    id: 'refactor-32-user-profile',
    title: 'Рефакторинг 32: Ревью UserProfile с userId',
    category: 'review',
  },
  {
    id: 'refactor-34-interval-no-deps',
    title: 'Рефакторинг 34: Счётчик: исправление без зависимостей эффекта',
    category: 'review',
  },
  {
    id: 'refactor-35-count-display',
    title: 'Рефакторинг 35: CountDisplay и значение из props',
    category: 'review',
  },
  {
    id: 'refactor-36-rest-dependencies',
    title: 'Рефакторинг 36: Интервал и объект rest в зависимостях',
    category: 'review',
  },
  {
    id: 'refactor-37-heavy-send',
    title: 'Рефакторинг 37: Ввод текста и тяжёлая кнопка отправки',
    category: 'review',
  },
  {
    id: 'refactor-39-timer-controls',
    title: 'Рефакторинг 39: Таймер: Start, Pause, Stop и пульсация',
    category: 'review',
  },
  {
    id: 'refactor-40-car-garage',
    title: 'Рефакторинг 40: Перемещение случайной машины в гараж',
    // @ts-expect-error Исходный JSX упражнения не имеет декларации типов.
    component: lazy(() => import('./review/refactor-40-car-garage/App.jsx')),
    category: 'review',
  },
  {
    id: 'refactor-41-state-mutation',
    title: 'Рефакторинг 41: Две кнопки: счётчик и имя',
    component: lazy(() =>
      // @ts-expect-error Исходный JSX упражнения не имеет декларации типов.
      import('./review/refactor-41-state-mutation/Refactor41Task.jsx').then(module => ({default: module.App})),
    ),
    category: 'review',
  },
  {
    id: 'refactor-42-companies-modules',
    title: 'Рефакторинг 42: Компании: сервис данных, store и компоненты',
    category: 'review',
  },
  {
    id: 'refactor-43-child-render',
    title: 'Рефакторинг 43: Child без ререндера при вводе',
    // @ts-expect-error Исходный JSX упражнения не имеет декларации типов.
    component: lazy(() => import('./review/refactor-43-child-render/App.jsx')),
    category: 'review',
  },
  {
    id: 'refactor-44-game-effects',
    title: 'Рефакторинг 44: Game: загрузка и fullscreenchange',
    category: 'review',
  },
  {
    id: 'refactor-45-disabled-submit',
    title: 'Рефакторинг 45: Кнопка submit и три поля',
    component: lazy(() => import('./review/refactor-45-disabled-submit/App')),
    category: 'review',
  },
  {
    id: 'refactor-47-enter-todos',
    title: 'Рефакторинг 47: Добавление задач через Enter и кнопку',
    category: 'review',
  },
  {
    id: 'user-profile-code-review',
    title: 'Ревью компонента UserProfile',
    category: 'review',
  },
  {
    id: 'server-user-autocomplete',
    title: 'Autocomplete: серверный поиск пользователей',
    component: lazy(() => import('./components/server-user-autocomplete/App.jsx')),
    category: 'components',
  },
  {
    id: 'profile-page-code-review',
    title: 'Ревью и рефакторинг ProfilePage',
    category: 'review',
  },
]
