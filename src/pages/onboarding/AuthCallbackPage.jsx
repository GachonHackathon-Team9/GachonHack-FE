import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      // 토큰 저장 (localStorage 및 Store)
      localStorage.setItem('accessToken', token);
      
      // 임시 사용자 데이터로 로그인 처리
      login({ token });

      // 첫 가입인지 확인하는 로직이 필요할 수 있으나, 우선 정보 입력 페이지로 이동
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
