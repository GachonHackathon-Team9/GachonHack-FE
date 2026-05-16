import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuthStore();
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !studentId) {
      alert('모든 정보를 입력해 주세요!');
      return;
    }

    updateProfile({ name, studentId });
    navigate('/map');
  };

  return (
    <div className={`${styles.registerContainer} container`}>
      <h2 className={`${styles.title} pixel-text`}>WHO ARE YOU?</h2>

      <div className={`${styles.formBox} pixel-border`}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={`${styles.label} pixel-text`}>REAL NAME</label>
            <input 
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex) 홍길동"
            />
          </div>

          <div className={styles.lastInputGroup}>
            <label className={`${styles.label} pixel-text`}>STUDENT ID</label>
            <input 
              type="text"
              className={styles.input}
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Ex) 202412345"
            />
          </div>

          <button 
            type="submit" 
            className="pixel-button" 
            style={{ width: '100%', backgroundColor: 'var(--pixel-secondary)' }}
          >
            START ADVENTURE
          </button>
        </form>
      </div>

      <div className={styles.footer}>
        <p className={`${styles.assignedNickname} pixel-text`}>
          ASSIGNED NICKNAME: {user?.nickname || 'Generating...'}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
