// Учебный мок для песочницы: исходный api.ts на странице не приведён.
export async function fetchDate(): Promise<string> {
  return new Date().toISOString()
}
