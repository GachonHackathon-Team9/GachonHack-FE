import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainMapPage.module.css';
import mapImage from '../../assets/map.png';
import chatImage from '../../assets/talk.png';
import bgImage from '../../assets/bg_image.png';
import coinImage from '../../assets/coin.png';
import image from '../../assets/cats/black_cat/image.png';

// 고양이 캐릭터 이미지 import
import catCharacter from '../../assets/cats/calico_cat/calico_cat_front.png';

const MainMapPage = () => {
  const navigate = useNavigate();
  const [charPos, setCharPos] = useState({ x: 48, y: 38 });
  const [activeQuestType, setActiveQuestType] = useState(null); // 'daily', 'team', or null
  const [selectedQuestIndex, setSelectedQuestIndex] = useState(0);

  const handleMapClick = (e) => {
    // 모달이 열려있을 때는 캐릭터 이동 방지
    if (activeQuestType) return;

    const mapRect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - mapRect.left) / mapRect.width) * 100;
    const y = ((e.clientY - mapRect.top) / mapRect.height) * 100;
    setCharPos({ x, y });
  };

  const handleIconClick = (type) => {
    setActiveQuestType(type);
    setSelectedQuestIndex(0); // 탭 전환 시 첫 번째 퀘스트 선택
  };

  const closeQuestModal = (e) => {
    if (e) e.stopPropagation();
    setActiveQuestType(null);
  };

  const handleQuestClick = (index) => {
    setSelectedQuestIndex(index);
  };

  const quests = {
    daily: [
      { id: '#1_Daily_quests', status: '검수중', title: '도서관에서 20분간 머무르기', location: '도서관', time: '1day' },
      { id: '#2_Daily_quests', status: '진행중', title: '카페에서 아메리카노 마시기', location: '카페', time: '1day' },
      { id: '#3_Daily_quests', status: '완료', title: '강의실 일찍 도착하기', location: '강의실', time: '1day' },
      { id: '#4_Daily_quests', status: '진행중', title: '운동장에서 조깅하기', location: '운동장', time: '1day' },
      { id: '#5_Daily_quests', status: '진행중', title: '동아리방 방문하기', location: '동아리방', time: '1day' },
    ],
    team: [
      { id: '#1_Team_quests', status: '진행중', title: '팀원과 함께 도서관 방문', location: '도서관', time: '1day' },
      { id: '#2_Team_quests', status: '진행중', title: '프로젝트 회의 참여', location: '세미나실', time: '1day' },
    ]
  };

  const currentQuests = activeQuestType ? quests[activeQuestType] : [];
  const selectedQuest = currentQuests[selectedQuestIndex] || currentQuests[0];

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
      {activeQuestType && (
        <div className={styles.questOverlay} onClick={closeQuestModal}>
          <div className={styles.questModal} onClick={(e) => e.stopPropagation()}>
            {/* Left Pane: List */}
            <div className={styles.modalLeftPane}>
              <h2 className={styles.modalTitle}>
                {activeQuestType === 'daily' ? '일일 퀘스트' : '팀 퀘스트'}
              </h2>
              <div className={styles.questList}>
                {currentQuests.map((quest, index) => (
                  <div 
                    key={quest.id} 
                    className={`${styles.questListItem} ${selectedQuestIndex === index ? styles.activeQuestItem : ''}`}
                    onClick={() => handleQuestClick(index)}
                  >
                    <div className={styles.questInfo}>
                      <span className={styles.questIdText}>{quest.id}</span>
                      <span className={styles.playIcon}>▶</span>
                    </div>
                    <div className={`${styles.statusTag} ${styles[quest.status]}`}>
                      {quest.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Pane: Detail */}
            <div className={styles.modalRightPane}>
              <h2 className={styles.detailTitle}>퀘스트 상세</h2>
              <div className={styles.detailId}>{selectedQuest?.id}</div>
              <div className={styles.detailBadges}>
                <span className={styles.detailBadge}>{selectedQuest?.location}</span>
                <span className={styles.detailBadge}>{selectedQuest?.time}</span>
              </div>
              
              <div className={styles.dividerWavy}></div>

              <div className={styles.detailDescription}>
                <span className={styles.playIconSmall}>▶</span>
                {selectedQuest?.title}
              </div>

              <div className={styles.dividerWavy}></div>

              <div className={styles.detailActionArea}>
                <button className={styles.detailButton}>{selectedQuest?.status}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Main Map Background */}
      <div
        className={styles.mapPlaceholder}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
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
        <div className={styles.profileCard}>
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
    </div>
  );
};

export default MainMapPage;