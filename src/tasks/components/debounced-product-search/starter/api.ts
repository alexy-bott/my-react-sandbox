export type Product = {
  id: number
  title: string
}

const products: Product[] = [
  {id: 1, title: 'Phone'},
  {id: 2, title: 'Headphones'},
  {id: 3, title: 'Laptop'},
  {id: 4, title: 'Keyboard'},
  {id: 5, title: 'Monitor'},
]

export async function searchProducts(query: string): Promise<Product[]> {
  await new Promise<void>((resolve) => window.setTimeout(resolve, 400))

  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return []
  }

  return products.filter((product) => product.title.toLowerCase().includes(normalizedQuery))
}
