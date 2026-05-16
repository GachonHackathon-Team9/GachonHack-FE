import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import styles from './PostDetailPage.module.css';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  // 목록 페이지에서 전달된 데이터가 있으면 사용하고, 없으면 기본값(예시 데이터) 사용
  const post = location.state?.post || {
    title: "상세 내용을 불러올 수 없습니다.",
    author: "알 수 없음",
    date: "----.--.--",
    views: 0,
    badge: null,
    content: "이 페이지는 리스트에서 항목을 클릭해야 정상적인 내용이 보입니다."
  };

  return (
    <div className={styles.pageContainer}>
      
      {/* Main Center Card */}
      <div className={styles.mainCard}>
        
        {/* Header */}
        <div className={styles.postHeader}>
          <div className={styles.postTitleRow}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            {post.badge === 'NEW' && <span className={styles.badgeNew}>NEW</span>}
            {post.badge === 'HOT' && <span className={styles.badgeHot}>HOT</span>}
          </div>
          
          <div className={styles.postMetaRow}>
            <span>작성자 : {post.author}</span>
            <span>작성일 : {post.date}</span>
            <span>조회수 : {post.views}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className={styles.postContentArea}>
          {post.title}
        </div>

      </div>

      {/* Bottom Right Return Button */}
      <div className={styles.returnArea}>
        <button className={styles.returnButton} onClick={() => navigate(-1)}>
          목록으로 돌아가기 &gt;
        </button>
      </div>

    </div>
  );
};

export default PostDetailPage;
