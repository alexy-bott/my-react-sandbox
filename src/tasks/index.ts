import type {ComponentType} from 'react'
import {AdaptiveOverflowMenuTask} from './adaptive-overflow-menu/AdaptiveOverflowMenuTask'
import {BaseFetch} from './base-fetch/BaseFetch'
import CardWildberies from './card-and-filters/CardWildberries'
import {SupplierOffersFilters} from './supplier-offers-filters/SupplierOffersFilters'
import {TimerTask} from './timer/TimerTask'
import {TodoTask} from './todo/TodoTask'
import {UseFetchTask} from './use-fetch/UseFetchTask'

export type Task = {
  id: string
  title: string
  component: ComponentType
}

export const tasks: Task[] = [
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
]
