export type Profile = { name: string }
export type Order = { id: string; amount: number }

async function request(url: string, options?: RequestInit) {
  const response = await fetch(url, options)
  if (!response.ok) throw new Error(response.statusText)
  return response
}

export async function loadProfile(signal: AbortSignal): Promise<[Profile, Order[]]> {
  // Оба запроса независимы, но экран готов только после обоих ответов.
  return Promise.all([
    request('/v1/get-user-profile', { signal }).then(response => response.json()),
    request('/v1/get-orders', { signal }).then(response => response.json()),
  ])
}

export async function saveProfile(user: Profile) {
  await request('/v1/save-profile', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user),
  })
}
