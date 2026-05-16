import React from 'react';
import styles from './ElevatorModal.module.css';

const ElevatorModal = ({ isOpen, onClose, onSelectFloor }) => {
  if (!isOpen) return null;

  const floors = ['5', '4', '3'];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.elevatorPanel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.panelHeader}>
          <span className="pixel-text">ELEVATOR</span>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        {/* Buttons Grid */}
        <div className={styles.buttonGrid}>
          {floors.map((floor) => (
            <button 
              key={floor} 
              className={`${styles.elevatorButton} ${(floor === '3' || floor === '4') ? styles.blocked : ''}`}
              disabled={floor === '3' || floor === '4'}
              onClick={() => onSelectFloor(floor)}
            >
              <span className="pixel-text">{floor}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ElevatorModal;
