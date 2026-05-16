import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SplashPage.module.css';
import titleLogo from '../../assets/title_logo.png';

const SplashPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <div className={styles.splashContainer}>
      <div className={styles.content}>
        <img 
          src={titleLogo} 
          alt="먀옹학관" 
          className={styles.titleLogo} 
        />
        
        <button 
          className={`${styles.startButton} pixel-text`}
          onClick={handleStart}
        >
          START
        </button>

        <p className={styles.universityName}>가천대학교</p>
      </div>
    </div>
  );
};

export default SplashPage;
