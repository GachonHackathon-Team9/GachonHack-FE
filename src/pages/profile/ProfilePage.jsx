import React from 'react';
import styles from './ProfilePage.module.css';

import bgImage from '../../assets/userpage_bg.png';
import catCharacter from '../../assets/cats/calico_cat/calico_cat_front.png';
import badgeIcon from '../../assets/honey.png'; // Using honey as a placeholder for the blue badge icon if needed, or we can just use a simple div

const ProfilePage = () => {
  return (
    <div 
      className={styles.pageContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      {/* Left Area for Character */}
      <div className={styles.characterArea}>
        <img src={catCharacter} alt="Character" className={styles.characterImg} />
      </div>

      {/* Right Area for Profile Card */}
      <div className={styles.profileCardArea}>
        <div className={styles.profileCard}>
          
          <div className={styles.cardHeader}>
            <span className={styles.idText}>ID : 202612345</span>
            <h1 className={styles.nameText}>빨간양말</h1>
          </div>

          <div className={styles.wavyDivider}></div>

          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>학과 / 학년 :</span>
            <span className={styles.infoValue}>컴퓨터공학과 / 1학년</span>
          </div>

          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>칭호 :</span>
            <div className={styles.badgeContainer}>
              <div className={styles.badgeIcon}>
                <span style={{ fontSize: '12px' }}>🛡️</span>
              </div>
              <span className={styles.badgeText}>아직 샌애기</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProfilePage;
