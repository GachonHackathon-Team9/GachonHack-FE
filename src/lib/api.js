import useAuthStore from '../store/useAuthStore';

const BASE_URL = 'https://gachonhack-be.onrender.com';

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) throw new Error('No refresh token available');

  const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) throw new Error('Token refresh failed');

  const data = await response.json();
  const { accessToken, refreshToken: newRefreshToken } = data.result;

  useAuthStore.getState().updateTokens(accessToken, newRefreshToken);

  return accessToken;
};

export const fetchWithAuth = async (url, options = {}) => {
  const makeRequest = (token) =>
    fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...options.headers,
      },
    });

  let response = await makeRequest(localStorage.getItem('accessToken'));

  if (response.status === 401) {
    try {
      const newToken = await refreshAccessToken();
      response = await makeRequest(newToken);
    } catch {
      useAuthStore.getState().logout();
      window.location.href = '/login';
      throw new Error('Session expired');
    }
  }

  return response;
};
