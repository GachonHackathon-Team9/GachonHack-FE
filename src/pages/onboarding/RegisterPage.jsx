import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import styles from './RegisterPage.module.css';
import gachonLogo from '../../assets/gachon_logo.png';
import bgImage from '../../assets/bg_image.png';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuthStore();
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !studentId || !grade) {
      alert('모든 정보를 입력해 주세요!');
      return;
    }

    // In a real app, you'd send this to the backend to authenticate with the school portal
    updateProfile({ name, studentId, grade });
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
            <label className={styles.inputLabel}>본명</label>
            <input
              type="text"
              className={styles.inputField}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>학번</label>
            <input
              type="text"
              className={styles.inputField}
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="202412345"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>학년</label>
            <input
              type="number"
              className={styles.inputField}
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="1"
              min="1"
              max="4"
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            <span>기본 정보 입력</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
