import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ElevatorPage.module.css';

const ElevatorPage = () => {
  const navigate = useNavigate();
  const floors = ['R', '5', '4', '3', '2', '1', 'B1'];

  return (
    <div className={styles.elevatorContainer}>
      <div className={styles.elevatorPanel}>
        {/* Display */}
        <div className={styles.display}>
          <span className={styles.floorNumber}>1</span>
          <div className={styles.statusIcons}>
            <div className={styles.upArrow}>▲</div>
          </div>
        </div>

        {/* Buttons Grid */}
        <div className={styles.buttonGrid}>
          {floors.map((floor) => (
            <button 
              key={floor} 
              className={styles.elevatorButton}
              onClick={() => {
                if (floor === '1') navigate('/map');
                else navigate('/corridor');
              }}
            >
              <span className="pixel-text">{floor}</span>
            </button>
          ))}
        </div>

        {/* Control Buttons */}
        <div className={styles.controlGroup}>
          <button className={styles.controlButton}>◄||►</button>
          <button className={styles.controlButton}>►||◄</button>
        </div>
      </div>

      <div className={styles.backButton} onClick={() => navigate('/map')}>
        <span className="pixel-text">BACK TO MAP</span>
      </div>
    </div>
  );
};

export default ElevatorPage;
