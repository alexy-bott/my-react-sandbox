export type ItemsResponse = {
  result: {code: number; items: {id: number; name: string}[]}
}

export function fetchItems(): Promise<ItemsResponse> {
  // Замени временный отклонённый Promise асинхронным моком из условия.
  return Promise.reject(new Error('Мок ещё не реализован'))
}
