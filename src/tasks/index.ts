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

export type Task = {
  id: string
  title: string
  component: ComponentType
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
  },
  {
    id: 'todo',
    title: 'Доработать to-do list',
    component: TodoTask,
  },
  {
    id: 'use-fetch',
    title: 'Реализовать хук useFetch',
    component: UseFetchTask,
  },
  {
    id: 'base-fetch',
    title: 'Реализовать компонент с fetch',
    component: BaseFetch,
  },
  {
    id: 'supplier-offers-filters',
    title: 'Фильтрация предложений поставщиков',
    component: SupplierOffersFilters,
  },
  {
    id: 'card-and-filters',
    title: 'Карточки магазина и поиск',
    component: CardWildberies,
  },
  {
    id: 'adaptive-overflow-menu',
    title: 'Адаптивное меню с dropdown',
    component: AdaptiveOverflowMenuTask,
  },
  {
    id: 'effect-lifecycle',
    title: 'Жизненный цикл вложенного компонента',
    component: EffectLifecycleTask,
  },
  {
    id: 'conditional-input-reset',
    title: 'Состояние поля при переключении',
    component: ConditionalInputsTask,
  },
  {
    id: 'debounced-product-search',
    title: 'Поиск товаров при вводе',
    component: ProductSearchTask,
  },
  {
    id: 'random-game-board',
    title: 'Генератор игрового поля',
    component: RandomGameBoardTask,
  },
  {
    id: 'checkbox-list',
    title: 'Управляемый список флажков',
    component: CheckboxListTask,
  },
  {
    id: 'state-history',
    title: 'Состояние с историей изменений',
    component: StateHistoryTask,
  },
  {
    id: 'react-refactoring',
    title: 'Ревью React-компонента',
    component: ReactReviewTask,
  },
  {
    id: 'nested-comments',
    title: 'Список вложенных комментариев',
    component: NestedCommentsTask,
  },
  {
    id: 'cross-tab-input-sync',
    title: 'Синхронизация текста между вкладками',
    component: CrossTabInputSyncTask,
  },
  {
    id: 'dynamic-form',
    title: 'Динамическая форма',
    component: DynamicFormTask,
  },
  {
    id: 'use-click-outside',
    title: 'Обработка клика вне элемента',
    component: UseClickOutsideTask,
  },
  {
    id: 'quiz-app',
    title: 'Квиз с подсчётом результатов',
    component: QuizTask,
  },
  {
    id: 'use-default',
    title: 'Состояние со значением по умолчанию',
    component: UseDefaultTask,
  },
  {
    id: 'use-key-press',
    title: 'Обработка нажатия клавиши',
    component: UseKeyPressTask,
  },
  {
    id: 'modal',
    title: 'Переиспользуемое модальное окно',
    component: ModalTask,
  },
  {
    id: 'use-breakpoint',
    title: 'Определение текущего breakpoint',
    component: UseBreakpointTask,
  },
  {
    id: 'use-boolean',
    title: 'Управление булевым состоянием',
    component: UseBooleanTask,
  },
  {
    id: 'use-array',
    title: 'Управление состоянием массива',
    component: UseArrayTask,
  },
  {
    id: 'use-state-with-reset',
    title: 'Состояние с функцией сброса',
    component: UseStateWithResetTask,
  },
  {
    id: 'use-map',
    title: 'Управление состоянием Map',
    component: UseMapTask,
  },
  {
    id: 'use-previous',
    title: 'Хранение предыдущего значения',
    component: UsePreviousTask,
  },
  {
    id: 'use-first-render',
    title: 'Определение первого рендера',
    component: UseFirstRenderTask,
  },
  {
    id: 'use-latest',
    title: 'Ref с актуальным значением',
    component: UseLatestTask,
  },
  {
    id: 'use-combined-ref',
    title: 'Объединение нескольких ref',
    component: UseCombinedRefTask,
  },
  {
    id: 'use-focus',
    title: 'Программная установка фокуса',
    component: UseFocusTask,
  },
  {
    id: 'use-hover',
    title: 'Отслеживание наведения',
    component: UseHoverTask,
  },
  {
    id: 'use-effect-once',
    title: 'Однократный эффект',
    component: UseEffectOnceTask,
  },
  {
    id: 'use-is-mounted-safe-state',
    title: 'Проверка монтирования и безопасное состояние',
    component: UseIsMountedSafeStateTask,
  },
  {
    id: 'use-query-params-state',
    title: 'Состояние в query-параметре',
    component: UseQueryParamsStateTask,
  },
  {
    id: 'use-mutation-observer',
    title: 'Наблюдение за DOM-изменениями',
    component: UseMutationObserverTask,
  },
  {
    id: 'use-event-listener',
    title: 'Универсальный обработчик событий',
    component: UseEventListenerTask,
  },
]
