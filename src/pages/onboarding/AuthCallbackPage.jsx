import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const tokenFromUrl = params.get('token');

    const handleLogin = async (token) => {
      localStorage.setItem('accessToken', token);
      login({ token });
      navigate('/register');
    };

    if (tokenFromUrl) {
      // 1. URL에 토큰이 직접 들어있는 경우 (이미 교환된 경우)
      handleLogin(tokenFromUrl);
    } else if (code) {
      // 2. URL에 code만 있는 경우 -> 백엔드에 토큰 교환 요청
      const exchangeCodeForToken = async () => {
        try {
          const response = await fetch(`https://gachonhack-be.onrender.com/login/kakao?code=${code}`);
          const data = await response.json();
          
          if (data.token) {
            handleLogin(data.token);
          } else {
            console.error('Failed to get token from backend:', data);
            // 임시 UI 테스트를 위해 에러가 나도 /register로 넘어갑니다
            alert('백엔드 토큰 교환 실패. (UI 테스트를 위해 강제로 넘어갑니다)');
            navigate('/register');
          }
        } catch (error) {
          console.error('Error during token exchange:', error);
          // 임시 UI 테스트를 위해 에러가 나도 /register로 넘어갑니다
          alert('백엔드 통신 에러. (UI 테스트를 위해 강제로 넘어갑니다)');
          navigate('/register');
        }
      };
      
      exchangeCodeForToken();
    } else {
      console.error('No code or token found in callback URL');
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
