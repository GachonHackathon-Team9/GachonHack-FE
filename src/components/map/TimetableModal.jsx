import React from 'react';
import styles from './TimetableModal.module.css';
import calendarImg from '../../assets/calendar.png';
import { useNavigate } from 'react-router-dom';

const TimetableModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClassClick = () => {
    navigate('/room');
  };

  const classes = [
    { title: '스마트빌딩', professor: '유원재', color: '#d4edda' },
    { title: '스마트시티 입문', professor: '이지호', color: '#d4edda' },
    { title: '스마트시티의 이론과 실제', professor: '이지호', color: '#e2d9f3' },
    { title: '도시 및 교통지리학', professor: '최진원', color: '#fff3cd' },
    { title: '도시사회통계학', professor: '강병동', color: '#f8f9fa' },
    { title: '기후변화와 지속가능성', professor: '유원재', color: '#e2d9f3' },
    { title: '조직공학', professor: '유원재', color: '#f8d7da' },
    { title: '신재생에너지 섹터커플링', professor: '박지영', color: '#e2e3e5' },
    { title: '스마트시티 에너지 연구 방법론 2', professor: '유원재', color: '#cce5ff' },
    { title: 'Agentic AI와 스마트시티', professor: '이지호', color: '#fff3cd' },
    { title: 'BIM기반 인공지능 응용', professor: '유원재', color: '#e2d9f3' },
    { title: '가천인세미나', professor: '이지호', color: '#e2d9f3' },
    { title: '최적화이론', professor: '김동구', color: '#d4edda' }
  ];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h2>AI관 503호 강의 시간표</h2>
          <p>수강중인 강의를 클릭하면 채팅 가능한 강의실로 이동됩니다.</p>
          <button className={styles.closeBtn} onClick={onClose}>✖</button>
        </div>
        
        {/* Body */}
        <div className={styles.modalBody}>
          {/* Left: Image */}
          <div className={styles.imageContainer}>
            <img src={calendarImg} alt="시간표" className={styles.timetableImg} />
          </div>
          
          {/* Right: Buttons */}
          <div className={styles.classListContainer}>
            <div className={styles.classListHeader}>강의 선택</div>
            <div className={styles.classList}>
              {classes.map((cls, idx) => (
                <button 
                  key={idx} 
                  className={styles.classBtn} 
                  style={{ backgroundColor: cls.color }}
                  onClick={handleClassClick}
                >
                  <span className={styles.classTitle}>{cls.title}</span>
                  <span className={styles.classProfessor}>{cls.professor}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableModal;
