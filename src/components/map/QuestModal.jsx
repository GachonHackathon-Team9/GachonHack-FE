import React, { useState, useEffect } from 'react';
import styles from './QuestModal.module.css';

const QuestModal = ({ isOpen, initialTab = 'daily', onClose }) => {
  const [activeQuestType, setActiveQuestType] = useState(initialTab);
  const [selectedQuestIndex, setSelectedQuestIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActiveQuestType(initialTab);
      setSelectedQuestIndex(0);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

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
    <div className={styles.questOverlay} onClick={onClose}>
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
  );
};

export default QuestModal;
