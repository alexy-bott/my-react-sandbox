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
import {NestedCommentsTask} from './nested-comments/active'
import {RandomGameBoardTask} from './random-game-board/active'
import {ReactReviewTask} from './react-refactoring/active'
import {StateHistoryTask} from './state-history/active'
import {SupplierOffersFilters} from './supplier-offers-filters/active'
import {TimerTask} from './timer/active'
import {TodoTask} from './todo/active'
import {UseClickOutsideTask} from './use-click-outside/active'
import {UseFetchTask} from './use-fetch/active'

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
]
