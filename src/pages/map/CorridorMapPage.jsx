import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CorridorMapPage.module.css';
import mapImage from '../../assets/corridor_map.jpg';
import chatImage from '../../assets/talk.png';
import bgImage from '../../assets/corridor_map_bg.png';
import coinImage from '../../assets/coin.png';
import image from '../../assets/cats/black_cat/image.png';

// 고양이 캐릭터 이미지 import
import catCharacter from '../../assets/cats/calico_cat/calico_cat_front.png';
import TimetableModal from '../../components/map/TimetableModal';
import QuestModal from '../../components/map/QuestModal';

const CorridorMapPage = () => {
  const navigate = useNavigate();
  const [charPos, setCharPos] = useState({ x: 48, y: 38 });
  const [activeQuestType, setActiveQuestType] = useState(null); // 'daily', 'team', or null
  const [isTimetableOpen, setIsTimetableOpen] = useState(false);

  const handleMapClick = (e) => {
    // 모달이 열려있을 때는 캐릭터 이동 방지
    if (activeQuestType || isTimetableOpen) return;

    const mapRect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - mapRect.left) / mapRect.width) * 100;
    const y = ((e.clientY - mapRect.top) / mapRect.height) * 100;
    setCharPos({ x, y });
  };

  const handleIconClick = (type) => {
    setActiveQuestType(type);
  };

  const closeQuestModal = (e) => {
    if (e) e.stopPropagation();
    setActiveQuestType(null);
  };

  return (
    <div className={styles.mapContainer} onClick={handleMapClick}>
      {/* 1. Top Floating Icons */}
      <div className={styles.topIcons}>
        {/* 1st: Blue with Alert -> Daily Quests */}
        <div
          className={`${styles.iconWrapper} ${styles.blue}`}
          onClick={(e) => { e.stopPropagation(); handleIconClick('daily'); }}
        >
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

        {/* 2nd: Purple with Check -> Team Quests */}
        <div
          className={`${styles.iconWrapper} ${styles.purple}`}
          onClick={(e) => { e.stopPropagation(); handleIconClick('team'); }}
        >
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

      {/* Quest Modal */}
      <QuestModal 
        isOpen={!!activeQuestType} 
        initialTab={activeQuestType} 
        onClose={closeQuestModal} 
      />

      {/* 2. Main Map Background */}
      <div
        className={styles.mapPlaceholder}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* 강의실 입장 버튼들 */}
        {[
          { id: 1, top: '55%', left: '73%' },
        ].map((entrance) => (
          <div
            key={entrance.id}
            className={styles.entranceMarker}
            style={{ top: entrance.top, left: entrance.left }}
          >
            <div className={styles.clickLabel}>
              <div className={styles.verticalClick}>
                <span>c</span>
                <span>l</span>
                <span>i</span>
                <span>c</span>
                <span>k</span>
              </div>
              <span className={styles.clickArrows}>»</span>
            </div>
            <button
              className={styles.entranceButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsTimetableOpen(true);
              }}
            >
              강의실<br />입장
            </button>
          </div>
        ))}

        {/* 캐릭터 이미지 */}
        <img
          src={catCharacter}
          alt="Character"
          className={styles.character}
          style={{
            left: `${charPos.x}%`,
            top: `${charPos.y}%`,
          }}
        />
      </div>

      {/* 4. Bottom Profile Card */}
      <div className={styles.profileArea}>
        <div className={styles.profileCard} onClick={() => navigate('/profile')}>
          <div className={styles.avatarCircle}>
            <img src={image} alt="Avatar" className={styles.avatarImg} />
          </div>
          <div className={styles.profileContent}>
            <div className={styles.studentId}>202612345</div>
            <div className={styles.nameRow}>
              <span className={styles.nickname}>빨간양말</span>
              <div className={styles.pointBox}>
                <img src={coinImage} alt="coin" className={styles.coin} />
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

      {/* Timetable Modal */}
      {isTimetableOpen && (
        <TimetableModal onClose={() => setIsTimetableOpen(false)} />
      )}
    </div>
  );
};

export default CorridorMapPage;
