import type {ComponentType} from 'react'
import {SandboxGuideTask} from './00-sandbox-guide/active'
import {AdaptiveOverflowMenuTask} from './components/adaptive-overflow-menu/active'
import {BaseFetch} from './components/base-fetch/active'
import CardWildberies from './components/card-and-filters/active'
import {CheckboxListTask} from './components/checkbox-list/active'
import {ConditionalInputsTask} from './review/conditional-input-reset/active'
import {CrossTabInputSyncTask} from './components/cross-tab-input-sync/active'
import {ProductSearchTask} from './components/debounced-product-search/active'
import {DynamicFormTask} from './components/dynamic-form/active'
import {HierarchicalListTask} from './components/hierarchical-list/active'
import {InfiniteScrollPostsTask} from './components/infinite-scroll-posts/active'
import {ContactListTask} from './components/contact-list/active'
import {ControlledUncontrolledInputsTask} from './components/controlled-uncontrolled-inputs/active'
import {RickMortySearchTask} from './components/rick-morty-search/active'
import {ClockMetricsTask} from './components/clock-metrics/active'
import {ProductListFilteringTask} from './components/product-list-filtering/active'
import {UserDataLoaderTask} from './components/user-data-loader/active'
import {CrushTheMoleTask} from './components/crush-the-mole/active'
import {InputAutocompleteTask} from './components/input-autocomplete/active'
import {UserTableCityFilterTask} from './components/user-table-city-filter/active'
import {PhoneNumberInputTask} from './components/phone-number-input/active'
import {CountdownTimerTask} from './components/countdown-timer/active'
import {UserListFilterTask} from './components/user-list-filter/active'
import {TicTacToeTask} from './components/tic-tac-toe/active'
import {UserListAdvancedTask} from './components/user-list-advanced/active'
import {UseDebounceThrottleEffectTask} from './hooks/use-debounce-throttle-effect/active'
import {UseToggleTask} from './hooks/use-toggle/UseToggleTask'
import {UseCountdownTask} from './hooks/use-countdown/active'
import {UseIntervalTask} from './hooks/use-interval/active'
import {UseObjectTask} from './hooks/use-object/active'
import {EffectLifecycleTask} from './review/effect-lifecycle/active'
import {ModalTask} from './components/modal/active'
import {NestedCommentsTask} from './components/nested-comments/active'
import {QuizTask} from './components/quiz-app/active'
import {RandomGameBoardTask} from './components/random-game-board/active'
import {ReactReviewTask} from './review/react-refactoring/active'
import {StateHistoryTask} from './hooks/state-history/active'
import {SupplierOffersFilters} from './components/supplier-offers-filters/active'
import {TimerTask} from './components/timer/active'
import {TodoTask} from './components/todo/active'
import {UseArrayTask} from './hooks/use-array/active'
import {UseBooleanTask} from './hooks/use-boolean/active'
import {UseBreakpointTask} from './hooks/use-breakpoint/active'
import {UseClickOutsideTask} from './hooks/use-click-outside/active'
import {UseCombinedRefTask} from './hooks/use-combined-ref/active'
import {UseDefaultTask} from './hooks/use-default/active'
import {UseEffectOnceTask} from './hooks/use-effect-once/active'
import {UseEventListenerTask} from './hooks/use-event-listener/active'
import {UseFetchTask} from './hooks/use-fetch/active'
import {UseFirstRenderTask} from './hooks/use-first-render/active'
import {UseFocusTask} from './hooks/use-focus/active'
import {UseHoverTask} from './hooks/use-hover/active'
import {UseIsMountedSafeStateTask} from './hooks/use-is-mounted-safe-state/active'
import {UseKeyPressTask} from './hooks/use-key-press/active'
import {UseLatestTask} from './hooks/use-latest/active'
import {UseMapTask} from './hooks/use-map/active'
import {UseMutationObserverTask} from './hooks/use-mutation-observer/active'
import {UsePreviousTask} from './hooks/use-previous/active'
import {UseQueryParamsStateTask} from './hooks/use-query-params-state/active'
import {UseStateWithResetTask} from './hooks/use-state-with-reset/active'
import {UserSearchCodeReviewTask} from './review/user-search-code-review/active'
import {UseMinMatchMediaTask} from './hooks/use-min-match-media/active'
import {UsersPageProductionReviewTask} from './review/users-page-production-review/active'
import {MultistepRegistrationFormTask} from './components/multistep-registration-form/active'
import {TimeoutBasicsTask} from './js-basics/timeout-basics/active'
import {MockedDataListTask} from './components/mocked-data-list/active'
import {MemoryGameTask} from './components/memory-game/active'
import {UseStepTask} from './hooks/use-step/active'
import {UseThrottleTask} from './hooks/use-throttle/active'
import {ServerDateReviewTask} from './review/server-date-review/active'
import {Refactor02Task} from './review/refactor-02-buggy-todo/active'
import {Refactor03Task} from './review/refactor-03-redux-todos/active'
import {Refactor04Task} from './review/refactor-04-cart-scroll/active'
import {Refactor05Task} from './review/refactor-05-list-mutation/active'
import {Refactor06Task} from './review/refactor-06-numbers-render/active'
import {Refactor07Task} from './review/refactor-07-memo-toggle/active'
import {Refactor08Task} from './review/refactor-08-window-event/active'
import {Refactor09Task} from './review/refactor-09-class-event/active'
import {Refactor10Task} from './review/refactor-10-lazy-init/active'
import {Refactor11Task} from './review/refactor-11-reverse-list/active'
import {Refactor12Task} from './review/refactor-12-counter-variable/active'
import {Refactor13Task} from './review/refactor-13-create-number/active'
import {Refactor14Task} from './review/refactor-14-even-child/active'
import {Refactor15Task} from './review/refactor-15-click-listener/active'
import {Refactor17Task} from './review/refactor-17-click-intervals/active'
import {Refactor18Task} from './review/refactor-18-counter-reset/active'
import {Refactor19Task} from './review/refactor-19-timed-users/active'
import {Refactor20Task} from './review/refactor-20-selected-post/active'
import {Refactor21Task} from './review/refactor-21-todo-search/active'
import {Refactor22Task} from './review/refactor-22-context-performance/active'
import {Refactor25Task} from './review/refactor-25-conditional-focus/active'
import {Refactor26Task} from './review/refactor-26-products-timer/active'
import {Refactor27Task} from './review/refactor-27-random-list-scroll/active'
import {Refactor28Task} from './review/refactor-28-refresh-tasks/active'
import {Refactor29Task} from './review/refactor-29-random-request-error/active'
import {Refactor30Task} from './review/refactor-30-infinite-scroll/active'
import {Refactor31Task} from './review/refactor-31-number-and-scroll/active'
import {Refactor32Task} from './review/refactor-32-user-profile/active'
import {Refactor34Task} from './review/refactor-34-interval-no-deps/active'
import {Refactor35Task} from './review/refactor-35-count-display/active'
import {Refactor36Task} from './review/refactor-36-rest-dependencies/active'
import {Refactor37Task} from './review/refactor-37-heavy-send/active'
import {Refactor39Task} from './review/refactor-39-timer-controls/active'
import {Refactor40Task} from './review/refactor-40-car-garage/active'
import {Refactor41Task} from './review/refactor-41-state-mutation/active'
import {Refactor42Task} from './review/refactor-42-companies-modules/active'
import {Refactor43Task} from './review/refactor-43-child-render/active'
import {Refactor44Task} from './review/refactor-44-game-effects/active'
import {Refactor45Task} from './review/refactor-45-disabled-submit/active'
import {Refactor47Task} from './review/refactor-47-enter-todos/active'

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
    component: TimerTask,
    category: 'components',
  },
  {
    id: 'todo',
    title: 'Доработать to-do list',
    component: TodoTask,
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
    component: BaseFetch,
    category: 'components',
  },
  {
    id: 'supplier-offers-filters',
    title: 'Фильтрация предложений поставщиков',
    component: SupplierOffersFilters,
    category: 'components',
  },
  {
    id: 'card-and-filters',
    title: 'Карточки магазина и поиск',
    component: CardWildberies,
    category: 'components',
  },
  {
    id: 'adaptive-overflow-menu',
    title: 'Адаптивное меню с dropdown',
    component: AdaptiveOverflowMenuTask,
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
    component: ConditionalInputsTask,
    category: 'review',
  },
  {
    id: 'debounced-product-search',
    title: 'Поиск товаров при вводе',
    component: ProductSearchTask,
    category: 'components',
  },
  {
    id: 'random-game-board',
    title: 'Генератор игрового поля',
    component: RandomGameBoardTask,
    category: 'components',
  },
  {
    id: 'checkbox-list',
    title: 'Управляемый список флажков',
    component: CheckboxListTask,
    category: 'components',
  },
  {
    id: 'state-history',
    title: 'Состояние с историей изменений',
    component: StateHistoryTask,
    category: 'hooks',
  },
  {
    id: 'react-refactoring',
    title: 'Ревью React-компонента',
    component: ReactReviewTask,
    category: 'review',
  },
  {
    id: 'nested-comments',
    title: 'Список вложенных комментариев',
    component: NestedCommentsTask,
    category: 'components',
  },
  {
    id: 'cross-tab-input-sync',
    title: 'Синхронизация текста между вкладками',
    component: CrossTabInputSyncTask,
    category: 'components',
  },
  {
    id: 'dynamic-form',
    title: 'Динамическая форма',
    component: DynamicFormTask,
    category: 'components',
  },
  {
    id: 'hierarchical-list',
    title: 'Вложенный список из иерархии',
    component: HierarchicalListTask,
    category: 'components',
  },
  {
    id: 'infinite-scroll-posts',
    title: 'Бесконечная загрузка постов',
    component: InfiniteScrollPostsTask,
    category: 'components',
  },
  {
    id: 'contact-list',
    title: 'Список контактов',
    component: ContactListTask,
    category: 'components',
  },
  {
    id: 'controlled-uncontrolled-inputs',
    title: 'Контролируемое и неконтролируемое поля',
    component: ControlledUncontrolledInputsTask,
    category: 'components',
  },
  {
    id: 'rick-morty-search',
    title: 'Поиск персонажей Rick and Morty',
    component: RickMortySearchTask,
    category: 'components',
  },
  {
    id: 'clock-metrics',
    title: 'Часы с метриками',
    component: ClockMetricsTask,
    category: 'components',
  },
  {
    id: 'product-list-filtering',
    title: 'Список и фильтрация товаров',
    component: ProductListFilteringTask,
    category: 'components',
  },
  {
    id: 'user-data-loader',
    title: 'Загрузка данных пользователя',
    component: UserDataLoaderTask,
    category: 'components',
  },
  {
    id: 'crush-the-mole',
    title: 'Crush the mole',
    component: CrushTheMoleTask,
    category: 'components',
  },
  {
    id: 'input-autocomplete',
    title: 'Автодополнение имён персонажей',
    component: InputAutocompleteTask,
    category: 'components',
  },
  {
    id: 'user-table-city-filter',
    title: 'Таблица с фильтрацией по городу',
    component: UserTableCityFilterTask,
    category: 'components',
  },
  {
    id: 'phone-number-input',
    title: 'Форматирование номера телефона',
    component: PhoneNumberInputTask,
    category: 'components',
  },
  {
    id: 'countdown-timer',
    title: 'Таймер с обратным отсчётом',
    component: CountdownTimerTask,
    category: 'components',
  },
  {
    id: 'user-list-filter',
    title: 'Список пользователей с фильтром',
    component: UserListFilterTask,
    category: 'components',
  },
  {
    id: 'tic-tac-toe',
    title: 'Крестики-нолики с историей',
    component: TicTacToeTask,
    category: 'components',
  },
  {
    id: 'user-list-advanced',
    title: 'Расширенный список пользователей',
    component: UserListAdvancedTask,
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
    component: UseToggleTask,
    category: 'hooks',
  },
  {
    id: 'use-countdown',
    title: 'Управление обратным отсчётом',
    component: UseCountdownTask,
    category: 'hooks',
  },
  {
    id: 'use-interval',
    title: 'Интервальный вызов callback',
    component: UseIntervalTask,
    category: 'hooks',
  },
  {
    id: 'use-object',
    title: 'Состояние объекта с объединением',
    component: UseObjectTask,
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
    component: QuizTask,
    category: 'components',
  },
  {
    id: 'use-default',
    title: 'Состояние со значением по умолчанию',
    component: UseDefaultTask,
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
    component: ModalTask,
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
    component: UseBooleanTask,
    category: 'hooks',
  },
  {
    id: 'use-array',
    title: 'Управление состоянием массива',
    component: UseArrayTask,
    category: 'hooks',
  },
  {
    id: 'use-state-with-reset',
    title: 'Состояние с функцией сброса',
    component: UseStateWithResetTask,
    category: 'hooks',
  },
  {
    id: 'use-map',
    title: 'Управление состоянием Map',
    component: UseMapTask,
    category: 'hooks',
  },
  {
    id: 'use-previous',
    title: 'Хранение предыдущего значения',
    component: UsePreviousTask,
    category: 'hooks',
  },
  {
    id: 'use-first-render',
    title: 'Определение первого рендера',
    component: UseFirstRenderTask,
    category: 'hooks',
  },
  {
    id: 'use-latest',
    title: 'Ref с актуальным значением',
    component: UseLatestTask,
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
    component: UseFocusTask,
    category: 'hooks',
  },
  {
    id: 'use-hover',
    title: 'Отслеживание наведения',
    component: UseHoverTask,
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
    component: UserSearchCodeReviewTask,
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
    component: UsersPageProductionReviewTask,
    category: 'review',
  },
  {
    id: 'multistep-registration-form',
    title: 'Многошаговая форма регистрации',
    component: MultistepRegistrationFormTask,
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
    component: MockedDataListTask,
    category: 'components',
  },
  {
    id: 'memory-game',
    title: 'Memory Game — найди пары',
    component: MemoryGameTask,
    category: 'components',
  },
  {
    id: 'use-step',
    title: 'Управление шагами — useStep',
    component: UseStepTask,
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
    component: ServerDateReviewTask,
    category: 'review',
  },
  {
    id: 'refactor-02-buggy-todo',
    title: 'Рефакторинг 02: BuggyTodo: загрузка и выполненные дела',
    component: Refactor02Task,
    category: 'review',
  },
  {
    id: 'refactor-03-redux-todos',
    title: 'Рефакторинг 03: React + Redux: восстановить приложение со списком дел',
    component: Refactor03Task,
    category: 'review',
  },
  {
    id: 'refactor-04-cart-scroll',
    title: 'Рефакторинг 04: Корзина и панель при прокрутке',
    component: Refactor04Task,
    category: 'review',
  },
  {
    id: 'refactor-05-list-mutation',
    title: 'Рефакторинг 05: Обновление первой строки списка',
    component: Refactor05Task,
    category: 'review',
  },
  {
    id: 'refactor-06-numbers-render',
    title: 'Рефакторинг 06: Счётчик и независимый список numbers',
    component: Refactor06Task,
    category: 'review',
  },
  {
    id: 'refactor-07-memo-toggle',
    title: 'Рефакторинг 07: Переключатель с memo-кнопкой',
    component: Refactor07Task,
    category: 'review',
  },
  {
    id: 'refactor-08-window-event',
    title: 'Рефакторинг 08: WindowEvent: лишние вызовы эффекта',
    component: Refactor08Task,
    category: 'review',
  },
  {
    id: 'refactor-09-class-event',
    title: 'Рефакторинг 09: Классовый компонент и сохранённое событие',
    component: Refactor09Task,
    category: 'review',
  },
  {
    id: 'refactor-10-lazy-init',
    title: 'Рефакторинг 10: Дорогое вычисление начального состояния',
    component: Refactor10Task,
    category: 'review',
  },
  {
    id: 'refactor-11-reverse-list',
    title: 'Рефакторинг 11: Переворот списка после выбора элемента',
    component: Refactor11Task,
    category: 'review',
  },
  {
    id: 'refactor-12-counter-variable',
    title: 'Рефакторинг 12: Счётчик в локальной переменной',
    component: Refactor12Task,
    category: 'review',
  },
  {
    id: 'refactor-13-create-number',
    title: 'Рефакторинг 13: Добавление чисел в список',
    component: Refactor13Task,
    category: 'review',
  },
  {
    id: 'refactor-14-even-child',
    title: 'Рефакторинг 14: Ререндер SubElement только при чётном count',
    component: Refactor14Task,
    category: 'review',
  },
  {
    id: 'refactor-15-click-listener',
    title: 'Рефакторинг 15: ClickListener: координата и отправка данных',
    component: Refactor15Task,
    category: 'review',
  },
  {
    id: 'refactor-17-click-intervals',
    title: 'Рефакторинг 17: PleaseReviewMe: список и интервалы по клику',
    component: Refactor17Task,
    category: 'review',
  },
  {
    id: 'refactor-18-counter-reset',
    title: 'Рефакторинг 18: Счётчик со сбросом на пяти',
    component: Refactor18Task,
    category: 'review',
  },
  {
    id: 'refactor-19-timed-users',
    title: 'Рефакторинг 19: Добавление пользователей за 15 секунд',
    component: Refactor19Task,
    category: 'review',
  },
  {
    id: 'refactor-20-selected-post',
    title: 'Рефакторинг 20: Выбор поста и данные пользователя',
    component: Refactor20Task,
    category: 'review',
  },
  {
    id: 'refactor-21-todo-search',
    title: 'Рефакторинг 21: Рефакторинг поиска по списку дел',
    component: Refactor21Task,
    category: 'review',
  },
  {
    id: 'refactor-22-context-performance',
    title: 'Рефакторинг 22: Context: часы, счётчик и Fibonacci',
    component: Refactor22Task,
    category: 'review',
  },
  {
    id: 'refactor-25-conditional-focus',
    title: 'Рефакторинг 25: Фокус на появившемся поле',
    component: Refactor25Task,
    category: 'review',
  },
  {
    id: 'refactor-26-products-timer',
    title: 'Рефакторинг 26: Товары, магазины и таймер',
    component: Refactor26Task,
    category: 'review',
  },
  {
    id: 'refactor-27-random-list-scroll',
    title: 'Рефакторинг 27: Асинхронный размер списка и прокрутка',
    component: Refactor27Task,
    category: 'review',
  },
  {
    id: 'refactor-28-refresh-tasks',
    title: 'Рефакторинг 28: Обновление списка задач клавишей r',
    component: Refactor28Task,
    category: 'review',
  },
  {
    id: 'refactor-29-random-request-error',
    title: 'Рефакторинг 29: Случайное число: ошибка запроса и scroll',
    component: Refactor29Task,
    category: 'review',
  },
  {
    id: 'refactor-30-infinite-scroll',
    title: 'Рефакторинг 30: Ревью useInfiniteScroll и его вызова',
    component: Refactor30Task,
    category: 'review',
  },
  {
    id: 'refactor-31-number-and-scroll',
    title: 'Рефакторинг 31: NumberAndScroll: асинхронный эффект',
    component: Refactor31Task,
    category: 'review',
  },
  {
    id: 'refactor-32-user-profile',
    title: 'Рефакторинг 32: Ревью UserProfile с userId',
    component: Refactor32Task,
    category: 'review',
  },
  {
    id: 'refactor-34-interval-no-deps',
    title: 'Рефакторинг 34: Счётчик: исправление без зависимостей эффекта',
    component: Refactor34Task,
    category: 'review',
  },
  {
    id: 'refactor-35-count-display',
    title: 'Рефакторинг 35: CountDisplay и значение из props',
    component: Refactor35Task,
    category: 'review',
  },
  {
    id: 'refactor-36-rest-dependencies',
    title: 'Рефакторинг 36: Интервал и объект rest в зависимостях',
    component: Refactor36Task,
    category: 'review',
  },
  {
    id: 'refactor-37-heavy-send',
    title: 'Рефакторинг 37: Ввод текста и тяжёлая кнопка отправки',
    component: Refactor37Task,
    category: 'review',
  },
  {
    id: 'refactor-39-timer-controls',
    title: 'Рефакторинг 39: Таймер: Start, Pause, Stop и пульсация',
    component: Refactor39Task,
    category: 'review',
  },
  {
    id: 'refactor-40-car-garage',
    title: 'Рефакторинг 40: Перемещение случайной машины в гараж',
    component: Refactor40Task,
    category: 'review',
  },
  {
    id: 'refactor-41-state-mutation',
    title: 'Рефакторинг 41: Две кнопки: счётчик и имя',
    component: Refactor41Task,
    category: 'review',
  },
  {
    id: 'refactor-42-companies-modules',
    title: 'Рефакторинг 42: Компании: сервис данных, store и компоненты',
    component: Refactor42Task,
    category: 'review',
  },
  {
    id: 'refactor-43-child-render',
    title: 'Рефакторинг 43: Child без ререндера при вводе',
    component: Refactor43Task,
    category: 'review',
  },
  {
    id: 'refactor-44-game-effects',
    title: 'Рефакторинг 44: Game: загрузка и fullscreenchange',
    component: Refactor44Task,
    category: 'review',
  },
  {
    id: 'refactor-45-disabled-submit',
    title: 'Рефакторинг 45: Кнопка submit и три поля',
    component: Refactor45Task,
    category: 'review',
  },
  {
    id: 'refactor-47-enter-todos',
    title: 'Рефакторинг 47: Добавление задач через Enter и кнопку',
    component: Refactor47Task,
    category: 'review',
  },
]
