import styles from './LoginPage.module.css';
import gachonLogo from '../../assets/gachon_logo.png';

const LoginPage = () => {
  const handleKakaoLogin = () => {
    // 카카오 REST API 키와 Redirect URI 설정
    // 실제 서비스 시에는 환경 변수(.env)로 관리하는 것이 좋습니다.
    const CLIENT_ID = a2f3d269be1a5c8b55b6edb55c890612; // 여기에 실제 REST API 키를 넣어주세요
    const REDIRECT_URI = 'http://localhost:5173/oauth2/redirect';
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
