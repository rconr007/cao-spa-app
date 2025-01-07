import React, { useState, useEffect, useRef } from 'react';
import styles from './Logo.module.css'; // Ensure this file contains necessary styles if needed


const BrandLogo: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e 
      ? e.touches[0].clientX - rect.left 
      : (e as MouseEvent).clientX - rect.left;
    const y = 'touches' in e 
      ? e.touches[0].clientY - rect.top 
      : (e as MouseEvent).clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((x - centerX) / centerX) * 15;
    const tiltY = ((y - centerY) / centerY) * 15;

    setTilt({ x: tiltX, y: -tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const touchStartHandler = (e: TouchEvent) => {
      e.preventDefault();
      handleMouseMove(e);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('touchstart', touchStartHandler);
    element.addEventListener('touchmove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('touchend', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('touchstart', touchStartHandler);
      element.removeEventListener('touchmove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  const gradientAngle = 45 + (tilt.x * 2);
  const brightnessIncrease = Math.abs(tilt.x) / 15;

  return (
    <div 
      ref={containerRef}
      className="relative inline-flex items-center justify-center cursor-pointer perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative transition-all duration-300 ease-out flex items-center"
        style={{ 
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <svg 
          className="h-24"
          viewBox="0 0 600 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="textGradient" gradientTransform={`rotate(${gradientAngle})`}>
              <stop offset="0%" stopColor="#002D62" stopOpacity={0.95} />
              <stop offset="50%" stopColor="#002D62" stopOpacity={0.95} />
              <stop offset="100%" stopColor="#CE1126" stopOpacity={0.95 + brightnessIncrease} />
            </linearGradient>
          </defs>
          
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="font-tsukimi font-bold"
            style={{ fontSize: '80px' }}
          >
            <tspan fill="url(#textGradient)">CAO</tspan>
            <tspan x="50%" dy="0">
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
            </tspan>
            <tspan fill="url(#textGradient)">NABO</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default BrandLogo;