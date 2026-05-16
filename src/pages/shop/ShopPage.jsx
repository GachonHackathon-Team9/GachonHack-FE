import React, { useState } from 'react';
import { Award, Coins, ShoppingBag, CheckCircle, Info } from 'lucide-react';
import styles from './ShopPage.module.css';

const ShopPage = () => {
  const [userPoints, setUserPoints] = useState(120);
  const [titles, setTitles] = useState([
    { id: 201, name: 'Hello World!', price: 100, desc: '에공타운에 첫 발을 내딛은 자', owned: true },
    { id: 202, name: '버그 수집가', price: 200, desc: '수많은 오류를 딛고 일어선 개발자', owned: false },
    { id: 203, name: '빈 강의실 지박령', price: 250, desc: '학구열이 넘쳐 강의실을 떠나지 않는 자', owned: false },
    { id: 204, name: '무한 루프', price: 300, desc: '지치지 않는 열정의 소유자', owned: false },
    { id: 205, name: '아르테크네 고인물', price: 600, desc: '아르테크네의 모든 것을 알고 있는 자', owned: false },
    { id: 206, name: '가천의 자랑', price: 1000, desc: '가천대학교의 위상을 드높인 자', owned: false },
    { id: 207, name: '코딩 머신', price: 500, desc: '기계처럼 코딩을 쏟아내는 자', owned: false },
    { id: 208, name: '디버깅 마스터', price: 450, desc: '어떤 버그도 두렵지 않은 자', owned: false },
  ]);

  const handlePurchase = (id, price) => {
    if (userPoints >= price) {
      setUserPoints(prev => prev - price);
      setTitles(prev => prev.map(t => t.id === id ? { ...t, owned: true } : t));
      alert('칭호를 구매했습니다!');
    } else {
      alert('포인트가 부족합니다!');
    }
  };

  return (
    <div className={styles.shopContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.mainTitle}>
            <ShoppingBag size={32} color="var(--pixel-secondary)" />
            <h1 className="pixel-text">TITLE SHOP</h1>
          </div>
          <p className="pixel-text">SPEND POINTS, GET UNIQUE TITLES!</p>
        </div>
        
        <div className={styles.pointWidget}>
          <Coins size={24} color="var(--pixel-secondary)" />
          <div className={styles.pointInfo}>
            <span className={styles.pointLabel}>BALANCE</span>
            <span className={`${styles.pointValue} pixel-text`}>{userPoints}P</span>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className={styles.infoBanner}>
        <Info size={18} />
        <span className="pixel-text">구매한 칭호는 프로필에서 장착할 수 있습니다.</span>
      </div>

      {/* Items Grid */}
      <div className={styles.itemGrid}>
        {titles.map(t => (
          <div key={t.id} className={`${styles.itemCard} ${t.owned ? styles.owned : ''}`}>
            <div className={styles.cardHeader}>
              <Award size={40} color={t.owned ? "var(--pixel-secondary)" : "#bdc3c7"} />
              {t.owned && <CheckCircle size={20} className={styles.checkIcon} color="#2ecc71" />}
            </div>
            
            <div className={styles.cardBody}>
              <h3 className="pixel-text">{t.name}</h3>
              <p>{t.desc}</p>
            </div>

            <div className={styles.cardFooter}>
              {t.owned ? (
                <div className={styles.ownedStatus}>
                  <span className="pixel-text">ALREADY OWNED</span>
                </div>
              ) : (
                <button 
                  className={`${styles.buyButton} pixel-text`}
                  onClick={() => handlePurchase(t.id, t.price)}
                  disabled={userPoints < t.price}
                >
                  <Coins size={14} />
                  <span>{t.price}P - BUY</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
