// src/components/CircularDialog.tsx

import React, { useState } from 'react';
import styles from './CircularDialog.module.css'; // Import styles as a module

interface CircularDialogProps {
  content: 'TOKEN' | 'ICO' | 'ROADMAP';
  onClose: () => void;
}

const CircularDialog: React.FC<CircularDialogProps> = ({ content, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.overlay}>
      <div className={`${styles.dialogContainer} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.dialogHeader}>
          <div className={styles.buttonContainer}>
            <button className={styles.closeButton} onClick={onClose}>
              <span style={{textAlign: 'center', marginLeft: '-5px'}}>X</span>
            </button>
            <button className={styles.expandButton} onClick={toggleExpand}>
            <span style={{textAlign: 'center', marginLeft: '-5px'}}>
              {isExpanded ? '-' : '+'}
              </span>
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#636363' }}>{content}</h2>
        <p className="text-center px-4" style={{ color: '#636363' }}>
          Brief information about {content}. Click the close button to dismiss.
        </p>
      </div>
    </div>
  );
};

export default CircularDialog;