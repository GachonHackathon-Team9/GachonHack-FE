import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AnnouncementsPage.module.css';

// Reusing existing profile assets
import coinImage from '../../assets/coin.png';
import image from '../../assets/cats/black_cat/image.png';

// Icons for top right
import honeyIcon from '../../assets/honey.png';
import gongjiIcon from '../../assets/gongji.png';

const AnnouncementsPage = () => {
  const navigate = useNavigate();

  const announcements = [
    {
      id: 1,
      title: "2026학년도 하계 외국어능력 졸업인증 대체프로그램 안내",
      author: "컴퓨터공학과",
      date: "2026.02.05",
      views: 1669,
      badge: "NEW"
    },
    {
      id: 2,
      title: "AI부트캠프 여름 계절학기 설명회 자료 홍보",
      author: "컴퓨터공학과",
      date: "2026.05.14",
      views: 327,
      badge: "HOT"
    },
    {
      id: 3,
      title: "2025학년도 재학생(신입생 제외) 폭력예방교육 안내",
      author: "컴퓨터공학과",
      date: "2025.11.14",
      views: 453,
      badge: null
    },
    {
      id: 4,
      title: "2026-1학기 마이크로디그리(MD) 신청 안내",
      author: "컴퓨터공학과",
      date: "2025.11.10",
      views: 599,
      badge: null
    }
  ];

  const handleClassTipsClick = (e) => {
    e.stopPropagation();
    navigate('/class-tips');
  };

  return (
    <div className={styles.pageContainer}>
      
      {/* Top Right Icons */}
      <div className={styles.topIconsRight}>
        <div className={styles.rightIconItem} onClick={handleClassTipsClick}>
          <div className={styles.circleIcon}>
            <img src={honeyIcon} alt="꿀팁" className={styles.innerIconImg} />
          </div>
          <span className={styles.iconLabel}>강의 꿀팁</span>
        </div>
        <div className={styles.rightIconItem}>
          <div className={styles.circleIcon}>
            <img src={gongjiIcon} alt="공지사항" className={styles.innerIconImg} />
          </div>
          <span className={styles.iconLabel}>공지사항</span>
        </div>
      </div>

      {/* Main Center Card */}
      <div className={styles.mainCard}>
        <h2 className={styles.cardTitle}>공지사항</h2>
        
        {/* Search Bar */}
        <div className={styles.searchBox}>
          <input type="text" className={styles.searchInput} />
          <button className={styles.searchButton}>검색</button>
        </div>

        {/* List */}
        <div className={styles.listContainer}>
          {announcements.map((item) => (
            <div 
              key={item.id} 
              className={styles.listItem}
              onClick={() => navigate(`/post/${item.id}`, { state: { post: item } })}
            >
              <div className={styles.itemTitleRow}>
                <span className={styles.itemTitle}>{item.title}</span>
                {item.badge === 'NEW' && <span className={styles.badgeNew}>NEW</span>}
                {item.badge === 'HOT' && <span className={styles.badgeHot}>HOT</span>}
              </div>
              <div className={styles.itemMetaRow}>
                <span className={styles.itemMeta}>작성자 : {item.author}</span>
                <span className={styles.itemMeta}>작성일 : {item.date}</span>
                <span className={styles.itemMeta}>조회수 : {item.views}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <span className={styles.pageArrow}>&lt;</span>
          <span className={`${styles.pageNum} ${styles.activePage}`}>1</span>
          <span className={styles.pageNum}>2</span>
          <span className={styles.pageNum}>3</span>
          <span className={styles.pageNum}>4</span>
          <span className={styles.pageNum}>6</span>
          <span className={styles.pageNum}>7</span>
          <span className={styles.pageNum}>8</span>
          <span className={styles.pageNum}>9</span>
          <span className={styles.pageArrow}>&gt;</span>
        </div>
      </div>

      {/* Bottom Left Profile Card */}
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

      {/* Bottom Right Return Button */}
      <div className={styles.returnArea}>
        <button className={styles.returnButton} onClick={() => navigate('/room')}>
          강의실로 돌아가기 &gt;
        </button>
      </div>

    </div>
  );
};

export default AnnouncementsPage;
