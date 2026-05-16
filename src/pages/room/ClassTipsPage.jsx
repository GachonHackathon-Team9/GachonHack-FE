import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AnnouncementsPage.module.css';

// Reusing existing profile assets
import coinImage from '../../assets/coin.png';
import image from '../../assets/cats/black_cat/image.png';

// Icons for top right
import honeyIcon from '../../assets/honey.png';
import gongjiIcon from '../../assets/gongji.png';

const ClassTipsPage = () => {
  const navigate = useNavigate();

  const tips = [
    {
      id: 1,
      title: "강의 내용 코드 공부해 볼 수 있는 사이트 공유",
      author: "검은수염",
      date: "2026.02.05",
      views: 1669,
      badge: "NEW"
    },
    {
      id: 2,
      title: "교재 무료나눔합니다",
      author: "무지개양말",
      date: "2026.05.14",
      views: 327,
      badge: "HOT"
    },
    {
      id: 3,
      title: "강의 수강 추천템",
      author: "노란부츠",
      date: "2025.11.14",
      views: 453,
      badge: null
    },
    {
      id: 4,
      title: "저희집 고양이 사진 공유드립니다",
      author: "빨간청바지",
      date: "2025.11.10",
      views: 599,
      badge: null
    }
  ];

  const handleAnnouncementsClick = (e) => {
    e.stopPropagation();
    navigate('/announcements');
  };

  return (
    <div className={styles.pageContainer}>
      
      {/* Top Right Icons */}
      <div className={styles.topIconsRight}>
        <div className={styles.rightIconItem}>
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

      {/* Main Center Card */}
      <div className={styles.mainCard}>
        <h2 className={styles.cardTitle}>강의꿀팁</h2>
        
        {/* Search Bar */}
        <div className={styles.searchBox}>
          <input type="text" className={styles.searchInput} />
          <button className={styles.searchButton}>검색</button>
        </div>

        {/* List */}
        <div className={styles.listContainer}>
          {tips.map((item) => (
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

export default ClassTipsPage;
