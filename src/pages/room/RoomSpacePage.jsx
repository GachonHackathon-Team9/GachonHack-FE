import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RoomSpacePage.module.css';
import chatImage from '../../assets/talk.png';
import classroomBg from '../../assets/classroom.png';
import coinImage from '../../assets/coin.png';
import image from '../../assets/cats/black_cat/image.png';

// 고양이 캐릭터 이미지 import
import catCharacter from '../../assets/cats/calico_cat/calico_cat_front.png';

// 아이콘 이미지 import
import honeyIcon from '../../assets/honey.png';
import gongjiIcon from '../../assets/gongji.png';

import QuestModal from '../../components/map/QuestModal';

const RoomSpacePage = () => {
  const navigate = useNavigate();
  const [charPos, setCharPos] = useState({ x: 50, y: 80 }); // Default bottom center
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [activeQuestType, setActiveQuestType] = useState(null); // 'daily', 'team', or null

  const handleMapClick = (e) => {
    // If clicking on chat UI or modal is open, don't move character
    if (activeQuestType || e.target.closest(`.${styles.chatArea}`)) return;
    
    const mapRect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - mapRect.left) / mapRect.width) * 100;
    const y = ((e.clientY - mapRect.top) / mapRect.height) * 100;
    setCharPos({ x, y });
  };

  const handleAnnouncementsClick = (e) => {
    e.stopPropagation();
    navigate('/announcements');
  };

  const handleClassTipsClick = (e) => {
    e.stopPropagation();
    navigate('/class-tips');
  };

  const handleIconClick = (type) => {
    setActiveQuestType(type);
  };

  const closeQuestModal = (e) => {
    if (e) e.stopPropagation();
    setActiveQuestType(null);
  };

  return (
    <div 
      className={styles.roomContainer} 
      style={{ backgroundImage: `url(${classroomBg})` }}
      onClick={handleMapClick}
    >
      {/* Quest Modal */}
      <QuestModal 
        isOpen={!!activeQuestType} 
        initialTab={activeQuestType} 
        onClose={closeQuestModal} 
      />

      {/* 1. Top Floating Icons (Left) */}
      <div className={styles.topIconsLeft}>
        {/* 1st: Blue with Alert */}
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

        {/* 2nd: Purple with Check */}
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

      {/* 2. Top Floating Icons (Right) */}
      <div className={styles.topIconsRight}>
        <div className={styles.rightIconItem} onClick={handleClassTipsClick}>
          <div className={styles.circleIcon}>
            <img src={honeyIcon} alt="꿀팁" className={styles.innerIconImg} />
          </div>
          <span className={styles.iconLabel}>강의 꿀팁</span>
        </div>
        <div className={styles.rightIconItem} onClick={handleAnnouncementsClick}>
          <div className={styles.circleIcon}>
            <img src={gongjiIcon} alt="공지사항" className={styles.innerIconImg} />
          </div>
          <span className={styles.iconLabel}>공지사항</span>
        </div>
      </div>

      {/* 3. Character in Center */}
      <img
        src={catCharacter}
        alt="Character"
        className={styles.character}
        style={{
          left: `${charPos.x}%`,
          top: `${charPos.y}%`,
        }}
      />

      {/* 4. Bottom Left Profile Card */}
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

      {/* 5. Bottom Right Chat UI */}
      <div className={styles.chatArea}>
        {isChatOpen && (
          <div className={styles.chatWindow}>
            <div className={styles.chatMessages}>
              <div className={styles.messageRow}>
                <span className={styles.msgName} style={{ color: '#F3BFFF' }}>노란반바지</span>
                <span className={styles.msgContent}>점메추 받아요~</span>
              </div>
              <div className={styles.messageRow}>
                <span className={styles.msgName} style={{ color: '#BBE2FF' }}>검은수염</span>
                <span className={styles.msgContent}>저희 다음주 석가탄신일 수업 하나요?</span>
              </div>
              <div className={styles.messageRow}>
                <span className={styles.msgName} style={{ color: '#FFDBBB' }}>무지개신발</span>
                <span className={styles.msgContent}>엇.. 저는 기독교라.. 잘 모르겠어요..</span>
              </div>
            </div>
            <div className={styles.chatInputRow}>
              <input type="text" className={styles.chatInput} placeholder="" />
              <button className={styles.sendButton}>&lt;</button>
            </div>
          </div>
        )}
        <button 
          className={styles.startChatBanner}
          onClick={(e) => {
            e.stopPropagation();
            setIsChatOpen(!isChatOpen);
          }}
        >
          {isChatOpen ? '채팅방 닫기 ❌' : '지금 친구들과 대화를 시작해보세요! 💬'}
        </button>
      </div>
    </div>
  );
};

export default RoomSpacePage;
