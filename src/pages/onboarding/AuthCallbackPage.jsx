import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import { fetchWithAuth } from '../../lib/api';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const tokenFromUrl = params.get('token');
    const refreshTokenFromUrl = params.get('refreshToken');

    const redirectByUserStatus = async (token) => {
      try {
        const response = await fetchWithAuth('/api/users/me');

        if (!response.ok) throw new Error(`Failed to fetch user info: ${response.status}`);

        const { isSuccess, result } = await response.json();

        if (!isSuccess) throw new Error('Failed to fetch user info');

        if (result?.nickname) {
          // 기존 회원: 유저 정보 store에 반영 후 홈으로
          login({ token, ...result });
          navigate('/map');
        } else {
          // 신규 회원: 토큰만 store에 저장 후 온보딩으로
          login({ token });
          navigate('/register');
        }
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        navigate('/login');
      }
    };

    const handleLogin = async (token, refreshToken) => {
      localStorage.setItem('accessToken', token);
      if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
      await redirectByUserStatus(token);
    };

    if (tokenFromUrl) {
      handleLogin(tokenFromUrl, refreshTokenFromUrl);
    } else {
      console.error('No token found in callback URL');
      navigate('/login');
    }
  }, [location, navigate, login]);

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p className="pixel-text">Authenticating...</p>
    </div>
  );
};

export default AuthCallbackPage;
