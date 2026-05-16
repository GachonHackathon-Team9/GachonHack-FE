import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get('token');
    const refreshTokenFromUrl = params.get('refreshToken');

    if (tokenFromUrl) {
      localStorage.setItem('accessToken', tokenFromUrl);
      if (refreshTokenFromUrl) localStorage.setItem('refreshToken', refreshTokenFromUrl);
      login({ token: tokenFromUrl });
      navigate('/register');
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
