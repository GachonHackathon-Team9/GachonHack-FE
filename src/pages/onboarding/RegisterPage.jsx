import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import styles from './RegisterPage.module.css';
import gachonLogo from '../../assets/gachon_logo.png';
import bgImage from '../../assets/bg_image.png';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuthStore();
  const [portalId, setPortalId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!portalId || !password) {
      alert('모든 정보를 입력해 주세요!');
      return;
    }

    // In a real app, you'd send this to the backend to authenticate with the school portal
    updateProfile({ portalId }); 
    navigate('/map');
  };

  return (
    <div 
      className={styles.registerContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.registerBox}>
        <div className={styles.logoArea}>
          <img src={gachonLogo} alt="가천대학교 로고" className={styles.universityLogo} />
        </div>

        <form onSubmit={handleSubmit} className={styles.formArea}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>ID</label>
            <input 
              type="text"
              className={styles.inputField}
              value={portalId}
              onChange={(e) => setPortalId(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Password</label>
            <input 
              type="password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
          >
            <span>로그인 하기</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
