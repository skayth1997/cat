import { API_URL, DEFAULT_HEADERS } from '../consts/api';


const api = {
  fetchAll: () => (
    fetch(`${API_URL}/v1/categories`, {
      method: 'GET',
      headers: DEFAULT_HEADERS
    }).then(r => r.json())
  )
};

export default api;
