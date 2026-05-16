import styles from './LoginPage.module.css';
import gachonLogo from '../../assets/gachon_logo.png';

const LoginPage = () => {
  const handleKakaoLogin = () => {
    // Vite 환경 변수에서 카카오 REST API 키를 가져옵니다.
    const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID; 
    const REDIRECT_URI = 'http://localhost:5173/oauth2/redirect';
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    if (!CLIENT_ID) {
      console.error('카카오 클라이언트 ID가 설정되지 않았습니다. .env 파일을 확인해주세요.');
      return;
    }

    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.logoArea}>
          <img src={gachonLogo} alt="가천대학교 로고" className={styles.universityLogo} />
        </div>

        <button
          onClick={handleKakaoLogin}
          className={styles.kakaoButton}
        >
          <span>카카오로 로그인 하기</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
