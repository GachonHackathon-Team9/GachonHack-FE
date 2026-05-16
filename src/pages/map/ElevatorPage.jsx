import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ElevatorPage.module.css';

const ElevatorPage = () => {
  const navigate = useNavigate();

  const handleFloorClick = (floor) => {
    if (floor === 'PH') {
      navigate('/map');
    } else {
      navigate('/corridor');
    }
  };

  return (
    <div className={styles.elevatorContainer}>
      <div className={styles.elevatorPanel}>
        <h1 className={`${styles.panelTitle} pixel-text`}>ELEVATOR</h1>
        <div className={styles.buttonGrid}>
          <button className={styles.floorButton} onClick={() => handleFloorClick('5F')}>5F</button>
          <button className={styles.floorButton} onClick={() => handleFloorClick('4F')}>4F</button>
          <button className={styles.floorButton} onClick={() => handleFloorClick('3F')}>3F</button>
          <button className={styles.floorButton} onClick={() => handleFloorClick('2F')}>2F</button>
          <button className={styles.floorButton} onClick={() => handleFloorClick('1F')}>1F</button>
          <button className={`${styles.floorButton} ${styles.phButton}`} onClick={() => handleFloorClick('PH')}>PH</button>
        </div>
        <div className={styles.elevatorStatus}>
          <div className={styles.statusDisplay}>
            <span className={styles.currentFloor}>PH</span>
            <span className={styles.direction}>▲</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorPage;
