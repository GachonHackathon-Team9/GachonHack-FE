import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainMapPage.module.css';
import mapImage from '../../assets/map.png';
import chatImage from '../../assets/talk.png';

const MainMapPage = () => {
  const navigate = useNavigate();
  const [charPos, setCharPos] = useState({ x: 58, y: 38 });

  const handleMapClick = (e) => {
    const mapRect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - mapRect.left) / mapRect.width) * 100;
    const y = ((e.clientY - mapRect.top) / mapRect.height) * 100;
    setCharPos({ x, y });
  };

  return (
    <div className={styles.mapContainer} onClick={handleMapClick}>
      {/* 1. Top Floating Icons */}
      <div className={styles.topIcons}>
        <div className={styles.iconWrapper}>
          <div className={styles.chatIconBox}>
            <img src={chatImage} alt="chat" className={styles.chatIcon} />
            <div className={styles.typingDots}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
          <div className={styles.notifBadge}>
            <span className={styles.notifText}>!</span>
          </div>
        </div>

        <div className={styles.iconWrapper}>
          <div className={styles.chatIconBox}>
            <img src={chatImage} alt="chat" className={styles.chatIcon} />
            <div className={styles.typingDots}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
          <div className={styles.checkBadge}>
            <span className={styles.checkText}>✓</span>
          </div>
        </div>
      </div>

      {/* 2. Quest Cards Area */}
      <div className={styles.questArea}>
        {/* Daily Quest */}
        <div className={styles.questCard}>
          <h3 className={styles.questTitle}>일일 퀘스트</h3>
          <p className={styles.questId}>#1_Daily_quests</p>
          <div className={styles.badgeRow}>
            <span className={styles.locationBadge}>도서관</span>
            <span className={styles.timeBadge}>1day</span>
          </div>
          <div className={styles.questDesc}>
            도서관에서 20분간 머무르기
          </div>
          <button className={styles.statusButtonPending}>검수중</button>
        </div>

        {/* Team Quest */}
        <div className={styles.questCard}>
          <h3 className={styles.questTitle}>팀 퀘스트</h3>
          <p className={styles.questId}>#1_Team_quests</p>
          <div className={styles.badgeRow}>
            <span className={styles.locationBadgeTeam}>카페</span>
            <span className={styles.timeBadge}>15m</span>
          </div>
          <div className={styles.questDesc}>
            교내 카페에 2인이상 방문하기
          </div>
          <button className={styles.statusButtonDone}>완료됨</button>
        </div>
      </div>

      {/* 3. Main Map Background (Placeholder) */}
      <div className={styles.mapPlaceholder}>
        {/* 이곳에 나중에 mapImage가 배경으로 들어갑니다 */}

        {/* Character Sprite */}
        <div
          className={styles.character}
          style={{ left: `${charPos.x}%`, top: `${charPos.y}%` }}
        >
          <div className={styles.charHead}>
            <div className={styles.catEars} />
          </div>
          <div className={styles.charBody} />
        </div>

        {/* Floating Arrow (Optional) */}
        <div className={styles.floatingArrow} style={{ left: '50%', top: '45%' }}>⬇️</div>
      </div>

      {/* 4. Bottom Profile Card */}
      <div className={styles.profileArea}>
        <div className={styles.profileCard}>
          <div className={styles.avatarCircle}>
            <img src="/assets/hero.png" alt="Avatar" className={styles.avatarImg} />
          </div>
          <div className={styles.profileContent}>
            <div className={styles.studentId}>202612345</div>
            <div className={styles.nameRow}>
              <span className={styles.nickname}>빨간양말</span>
              <div className={styles.pointBox}>
                <span className={styles.coin}>🪙</span>
                <span className={styles.pointValue}>2,185</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Bottom Right Mini Map */}
      <div className={styles.miniMapArea}>
        <div className={styles.miniMapBox}>
          <img src={mapImage} alt="Mini Map" className={styles.miniMapImg} />
          <div className={styles.miniMapMarker}>📍</div>
        </div>
      </div>
    </div>
  );
};

export default MainMapPage;
