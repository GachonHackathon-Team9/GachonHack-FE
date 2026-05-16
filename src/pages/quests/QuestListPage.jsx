import React, { useState } from 'react';
import { Scroll, Users, Award, Coins, CheckCircle2, Lock } from 'lucide-react';
import styles from './QuestListPage.module.css';

const QuestListPage = () => {
  const [activeTab, setActiveTab] = useState('solo'); // 'solo', 'buddy'
  const [userPoints, setUserPoints] = useState(120);

  const soloQuests = [
    { id: 1, tier: 'Tier 1', title: '아르테크네 방문', desc: '아르테크네 공간에 방문하여 체크인하세요.', reward: 2, status: 'available' },
    { id: 2, tier: 'Tier 1', title: '실시간 시간표 확인', desc: '오늘의 실시간 강의실 상태를 확인하세요.', reward: 2, status: 'completed' },
    { id: 3, tier: 'Tier 2', title: '에공타운 전체 탐방', desc: 'AI공학관의 모든 구역을 한 번씩 방문하세요.', reward: 5, status: 'in-progress' },
    { id: 4, tier: 'Tier 3', title: '에공 쾌적도 디버깅', desc: '복도에 버려진 쓰레기를 줍고 인증하세요.', reward: 15, status: 'available' },
    { id: 5, tier: 'Tier 3', title: '마라톤 스터디', desc: '5시간 연속으로 학습 공간에 체류하세요.', reward: 25, status: 'locked' },
  ];

  const buddyQuests = [
    { id: 101, tier: 'Tier 1', title: 'Hello, World!', desc: '매칭된 짝꿍과 첫 오프라인 만남을 가지세요.', reward: 4, status: 'completed' },
    { id: 102, tier: 'Tier 2', title: '실습실 코딩 메이트', desc: '짝꿍과 함께 실습실에서 1시간 이상 코딩하세요.', reward: 8, status: 'in-progress' },
    { id: 103, tier: 'Tier 3', title: '팀 프로젝트 공동 커밋', desc: '깃허브에서 짝꿍과 함께 리포지토리에 커밋하세요.', reward: 20, status: 'available' },
  ];

  const renderQuests = (quests) => (
    <div className={styles.questGrid}>
      {quests.map(q => (
        <div key={q.id} className={`${styles.questCard} ${styles[q.status]}`}>
          <div className={styles.questTier}>{q.tier}</div>
          <h3 className="pixel-text">{q.title}</h3>
          <p>{q.desc}</p>
          <div className={styles.questFooter}>
            <div className={styles.reward}>
              <Coins size={14} color="var(--pixel-secondary)" />
              <span className="pixel-text">{q.reward}P</span>
            </div>
            <div className={styles.statusBadge}>
              {q.status === 'completed' ? <CheckCircle2 size={18} color="#2ecc71" /> : 
               q.status === 'locked' ? <Lock size={18} color="#95a5a6" /> : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.questContainer}>
      {/* Header with Points */}
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1 className="pixel-text">QUEST BOARD</h1>
          <p className="pixel-text">COMPLETE MISSIONS, EARN POINTS!</p>
        </div>
        <div className={styles.pointWidget}>
          <Coins size={24} color="var(--pixel-secondary)" />
          <div className={styles.pointInfo}>
            <span className={styles.pointLabel}>MY POINTS</span>
            <span className={`${styles.pointValue} pixel-text`}>{userPoints}P</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tab} ${activeTab === 'solo' ? styles.active : ''}`}
          onClick={() => setActiveTab('solo')}
        >
          <Scroll size={18} />
          <span className="pixel-text">SOLO</span>
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'buddy' ? styles.active : ''}`}
          onClick={() => setActiveTab('buddy')}
        >
          <Users size={18} />
          <span className="pixel-text">BUDDY</span>
        </button>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {activeTab === 'solo' && renderQuests(soloQuests)}
        {activeTab === 'buddy' && renderQuests(buddyQuests)}
      </div>
    </div>
  );
};

export default QuestListPage;
