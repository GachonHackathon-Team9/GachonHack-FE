import styles from './LoginPage.module.css';
import gachonLogo from '../../assets/gachon_logo.png';

const LoginPage = () => {
  const handleKakaoLogin = () => {
    window.location.href = 'https://gachonhack-be.onrender.com/oauth2/authorization/kakao';
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
