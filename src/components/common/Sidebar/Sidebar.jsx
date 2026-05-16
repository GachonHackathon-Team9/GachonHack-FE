import React from 'react';
import styles from './Sidebar.module.css';
import gachonLogo from '../../../assets/gachon_logo_1.jpg';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 층 정보를 경로를 통해 파악 (임시 로직)
  const isPH = location.pathname === '/map';
  const is5F = location.pathname === '/corridor';

  return (
    <aside className={styles.sidebar}>
      {/* Top Logo Section */}
      <div className={styles.logoContainer}>
        <div className={styles.logoBox}>
          <img src={gachonLogo} alt="가천대학교" className={styles.universityLogo} />
        </div>
      </div>

      {/* Middle Elevator Section - 공지사항/꿀팁/게시글 상세 페이지에서는 숨김 */}
      {(location.pathname !== '/announcements' && location.pathname !== '/class-tips' && !location.pathname.startsWith('/post')) && (
        <div className={styles.elevatorSection}>
          <h2 className={`${styles.elevatorTitle} pixel-text`}>ELEVATOR</h2>
          <div className={styles.floorContainer}>
            <div className={styles.floorInnerBox}>
              <button
                className={`${styles.floorButton} ${isPH ? styles.activePH : ''}`}
                onClick={() => navigate('/map')}
              >
                PH
              </button>
              <button
                className={`${styles.floorButton} ${is5F ? styles.activeFloor : ''}`}
                onClick={() => navigate('/corridor')}
              >
                5층
              </button>
              <button className={styles.floorButton}>4층</button>
              <button className={styles.floorButton}>3층</button>
            </div>
          </div>
        </div>
      )}

    </aside>
  );
};

export default Sidebar;
