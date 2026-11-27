// Перенос общего значения устраняет цикл root → component → dataService → root.
export const ClientType = { company: 'company', person: 'person' };
export async function getData(state, signal) {
  const response = await fetch('/api/companies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: state.client.id, type: ClientType.company }),
    signal,
  });
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
