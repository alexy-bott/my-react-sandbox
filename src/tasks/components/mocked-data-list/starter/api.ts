export type ItemsResponse = {
  result: {code: number; items: {id: number; name: string}[]}
}

export function fetchItems(): Promise<ItemsResponse> {
  // Твой код здесь: асинхронный мок ответа из условия.
  return Promise.reject(new Error('Мок ещё не реализован'))
}
