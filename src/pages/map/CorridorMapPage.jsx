import React, { useState } from 'react';
import styles from './CorridorMapPage.module.css';

const CorridorMapPage = () => {
  const [charPos, setCharPos] = useState({ x: 10, y: 50 }); // Starting near the elevator

  const handleMapClick = (e) => {
    const mapRect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - mapRect.left) / mapRect.width) * 100;
    const y = ((e.clientY - mapRect.top) / mapRect.height) * 100;
    setCharPos({ x, y });
  };

  return (
    <div className={styles.corridorContainer} onClick={handleMapClick}>
      {/* Background elements like floor and walls */}
      <div className={styles.walls} />
      <div className={styles.floor} />

      <div className={`${styles.header} pixel-text`}>
        AI BUILDING - 5F CORRIDOR
      </div>

      {/* Decorative rooms */}
      <div className={styles.roomContainer}>
        {[501, 502, 503, 504].map(num => (
          <div key={num} className={styles.roomDoor}>
            <div className={styles.doorPanel} />
            <span className="pixel-text">{num}</span>
          </div>
        ))}
      </div>

      {/* Character Sprite */}
      <div 
        className={styles.character}
        style={{ left: `${charPos.x}%`, top: `${charPos.y}%` }}
      >
        <div className={styles.charHead} />
        <div className={styles.charBody} />
      </div>

      <div className={styles.instruction}>
        <span className="pixel-text">CLICK TO MOVE</span>
      </div>
    </div>
  );
};

export default CorridorMapPage;
