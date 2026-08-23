import type {ComponentType} from 'react'
import {SandboxGuideTask} from './00-sandbox-guide/active'
import {AdaptiveOverflowMenuTask} from './adaptive-overflow-menu/active'
import {BaseFetch} from './base-fetch/active'
import CardWildberies from './card-and-filters/active'
import {CheckboxListTask} from './checkbox-list/active'
import {ConditionalInputsTask} from './conditional-input-reset/active'
import {CrossTabInputSyncTask} from './cross-tab-input-sync/active'
import {ProductSearchTask} from './debounced-product-search/active'
import {DynamicFormTask} from './dynamic-form/active'
import {HierarchicalListTask} from './hierarchical-list/active'
import {InfiniteScrollPostsTask} from './infinite-scroll-posts/active'
import {ContactListTask} from './contact-list/active'
import {ControlledUncontrolledInputsTask} from './controlled-uncontrolled-inputs/active'
import {RickMortySearchTask} from './rick-morty-search/active'
import {ClockMetricsTask} from './clock-metrics/active'
import {ProductListFilteringTask} from './product-list-filtering/active'
import {UserDataLoaderTask} from './user-data-loader/active'
import {CrushTheMoleTask} from './crush-the-mole/active'
import {InputAutocompleteTask} from './input-autocomplete/active'
import {UserTableCityFilterTask} from './user-table-city-filter/active'
import {PhoneNumberInputTask} from './phone-number-input/active'
import {CountdownTimerTask} from './countdown-timer/active'
import {UserListFilterTask} from './user-list-filter/active'
import {TicTacToeTask} from './tic-tac-toe/active'
import {UserListAdvancedTask} from './user-list-advanced/active'
import {UseDebounceThrottleEffectTask} from './use-debounce-throttle-effect/active'
import {UseToggleTask} from './use-toggle/active'
import {UseCountdownTask} from './use-countdown/active'
import {UseIntervalTask} from './use-interval/active'
import {UseObjectTask} from './use-object/active'
import {EffectLifecycleTask} from './effect-lifecycle/active'
import {ModalTask} from './modal/active'
import {NestedCommentsTask} from './nested-comments/active'
import {QuizTask} from './quiz-app/active'
import {RandomGameBoardTask} from './random-game-board/active'
import {ReactReviewTask} from './react-refactoring/active'
import {StateHistoryTask} from './state-history/active'
import {SupplierOffersFilters} from './supplier-offers-filters/active'
import {TimerTask} from './timer/active'
import {TodoTask} from './todo/active'
import {UseArrayTask} from './use-array/active'
import {UseBooleanTask} from './use-boolean/active'
import {UseBreakpointTask} from './use-breakpoint/active'
import {UseClickOutsideTask} from './use-click-outside/active'
import {UseCombinedRefTask} from './use-combined-ref/active'
import {UseDefaultTask} from './use-default/active'
import {UseEffectOnceTask} from './use-effect-once/active'
import {UseEventListenerTask} from './use-event-listener/active'
import {UseFetchTask} from './use-fetch/active'
import {UseFirstRenderTask} from './use-first-render/active'
import {UseFocusTask} from './use-focus/active'
import {UseHoverTask} from './use-hover/active'
import {UseIsMountedSafeStateTask} from './use-is-mounted-safe-state/active'
import {UseKeyPressTask} from './use-key-press/active'
import {UseLatestTask} from './use-latest/active'
import {UseMapTask} from './use-map/active'
import {UseMutationObserverTask} from './use-mutation-observer/active'
import {UsePreviousTask} from './use-previous/active'
import {UseQueryParamsStateTask} from './use-query-params-state/active'
import {UseStateWithResetTask} from './use-state-with-reset/active'
// task:new imports

export type TaskCategory =
  | 'components'
  | 'hooks'
  | 'review'
  | 'other'

export type Task = {
  id: string
  title: string
  component: ComponentType
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
  // task:new entries
]
