export type ItemsResponse = {
  result: { code: number; items: { id: number; name: string }[] }
}

export async function fetchItems(): Promise<ItemsResponse> {
  return {
    result: {
      code: 6,
      items: [
        { id: 15, name: 'foo' },
        { id: 48, name: 'bar' },
      ],
    },
  }
}
