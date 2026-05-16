import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';

import bgImage from '../../assets/userpage_bg.png';
import catCharacterFront from '../../assets/cats/calico_cat/calico_cat_front.png';
import catCharacterRight from '../../assets/cats/calico_cat/calico_cat_right.png';
import catCharacterBack from '../../assets/cats/calico_cat/calico_cat_back.png';
import badgeBaby from '../../assets/honey.png'; // Placeholder for baby badge icon
import badgeGachon from '../../assets/gongji.png'; // Placeholder for gachon badge icon
import badge1 from '../../assets/badge1.png';
import badge2 from '../../assets/badge2.png';
import lineImage from '../../assets/line.png';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className={styles.pageContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      {/* Badges Area (Top Left) */}
      <div className={styles.badgesBox}>
        <div className={styles.badgesTitle}>Badges</div>
        
        <div className={styles.badgeFilled} style={{ backgroundColor: '#fff' }}>
          <img src={badge1} alt="Badge 1" />
        </div>
        <div className={styles.badgeFilled} style={{ backgroundColor: '#fff' }}>
          <img src={badge2} alt="Badge 2" />
        </div>
        <div className={styles.badgeSlot}>+</div>
        <div className={styles.badgeSlot}>+</div>
        <div className={styles.badgeSlot}>+</div>
      </div>

      {/* Back Button (Bottom Left) */}
      <div className={styles.backButton} onClick={() => navigate(-1)}>
        <span className={styles.backIcon}>&larr;</span>
      </div>

      {/* Left Area for Character */}
      <div className={styles.characterArea}>
        <img src={catCharacterFront} alt="Character" className={styles.characterImg} />
      </div>

      {/* Right Area for Profile Card */}
      <div className={styles.profileCardArea}>
        <div className={styles.profileCard}>
          
          <div className={styles.cardHeader}>
            <span className={styles.idText}>ID : 202612345</span>
            <h1 className={styles.nameText}>빨간양말</h1>
          </div>

          <img src={lineImage} alt="divider" className={styles.wavyDivider} />

          <div className={styles.infoList}>
            <div className={styles.infoRow}>
              <span className={styles.bulletPoint}>▶</span>
              <span className={styles.infoLabel}>학과 :</span>
              <span className={styles.infoValue}>컴퓨터공학과</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.bulletPoint}>▶</span>
              <span className={styles.infoLabel}>학년 :</span>
              <span className={styles.infoValue}>1학년</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.bulletPoint}>▶</span>
              <span className={styles.infoLabel}>칭호 :</span>
              <div className={styles.badgeContainer}>
                <div className={styles.badgeIconSmall}>
                  <img src={badge1} alt="icon" />
                </div>
                <span className={styles.badgeText}>아직 샌애기</span>
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.bulletPoint}>▶</span>
              <span className={styles.infoLabel}>주서식지 :</span>
              <span className={styles.infoValue}>먀옹학관</span>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.bulletPoint}>▶</span>
              <span className={styles.infoLabel}>주식 :</span>
              <span className={styles.infoValue}>먀 토큰</span>
            </div>
          </div>

          {/* 3 Cats Row */}
          <div className={styles.catAnglesRow}>
            <img src={catCharacterFront} alt="Cat Front" className={styles.catAngleImg} />
            <img src={catCharacterRight} alt="Cat Side" className={styles.catAngleImg} />
            <img src={catCharacterBack} alt="Cat Back" className={styles.catAngleImg} />
          </div>

          <img src={lineImage} alt="divider" className={styles.wavyDivider} style={{ marginBottom: '20px' }} />

          <button className={styles.logoutButton} onClick={() => navigate('/login')}>
            <span>[→ 로그아웃</span>
          </button>

        </div>
      </div>

    </div>
  );
};

export default ProfilePage;
