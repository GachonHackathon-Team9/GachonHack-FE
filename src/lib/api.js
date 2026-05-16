const BASE_URL = 'https://gachonhack-be.onrender.com';

export const fetchWithAuth = (url, options = {}) => {
  const accessToken = localStorage.getItem('accessToken');

  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      ...options.headers,
    },
  });
};
