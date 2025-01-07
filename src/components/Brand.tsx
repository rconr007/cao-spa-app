// src/components/Brand.tsx

import React from 'react';
import Logo from './Logo'; // Adjust the import path as necessary
import styles from './Brand.module.css'; // Create a CSS module for styling

const Brand: React.FC = () => {
  return (
    <div className={styles.brandContainer}>
      <h1 className={styles.brandName}>
        <span style={{ marginRight: '0.02rem' }}>CA</span>
        <div className={styles.logoContainer}><Logo /></div>
        <span style={{ marginLeft: '0px' }}>NABO</span>
      </h1>
    </div>
  );
};

export default Brand;