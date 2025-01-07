// src/components/Logo.tsx

import React from 'react';
import styles from './Logo.module.css'; // Ensure this file contains necessary styles if needed

const Logo: React.FC = () => {
  return (
    <div className="w-8 h-8"> {/* Set the size of the logo container to 32x32 pixels */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="6 -6 512 512"
        className="logoSvg" // Use the logoSvg class for consistent sizing
      >
        <defs>
          <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="49.64" y1="250" x2="474.36" y2="250">
            <stop offset="0" stopColor="rgb(0, 255, 153)" />
            <stop offset="1" stopColor="rgb(51, 204, 255)" />
          </linearGradient>
        </defs>
        
        <g className={styles.rotatingGroup}>
          <circle cx="262" cy="250" r="204.4" fill="none" stroke="url(#gradient)" strokeWidth="16" strokeMiterlimit="10" />
          <circle cx="404.8" cy="104" r="25.3" fill="url(#gradient)" />
          <circle cx="60.8" cy="289.5" r="24.9" fill="url(#gradient)" />
          <circle cx="300" cy="450" r="25" fill="url(#gradient)" />
        </g>
        
    <circle cx="262" cy="250" r="100" fill="rgba(255, 255, 255, 0.2)" />
        <image xlinkHref="caonabo_logo_nbg.png" x="85" y="75" width="350" height="350" />
      </svg>
    </div>
  );
};

export default Logo;