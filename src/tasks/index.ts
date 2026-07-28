import type {ComponentType} from 'react'
import {TimerTask} from './timer/TimerTask'
import {TodoTask} from './todo/TodoTask'
import {UseFetchTask} from './use-fetch/UseFetchTask'
import {BaseFetch} from "./base-fetch/BaseFetch.tsx";
import {SupplierOffersFilters} from "./supplier-offers-filters/SupplierOffersFilters.tsx";
import CardWildberies from "./card-and-filters/CardWildberries.tsx";

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
    id: "supplier-offers-filters",
    title: "Фильтрация предложений поставщиков",
    component: SupplierOffersFilters,
  },
  {
    id: "card-and-filters",
    title: "Карточки магазина и поиск",
    component: CardWildberies,
  },
]
