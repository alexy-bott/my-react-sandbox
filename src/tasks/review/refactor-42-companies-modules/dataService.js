// dataService.js
import { ClientType as _ClientType } from './root';
export function getData(state) {
  const response = fetch('/api/companies', {
    method: 'POST',
    body: JSON.stringify({ id: state.client.id, type: _ClientType.company })
  });
  return response;
}
export const ClientType = _ClientType;

