// src/components/CaoBadge.tsx

import React, { useState, useEffect, useRef } from 'react';
import CircularDialog from './CircularDialog';
import styles from './CaoBadge.module.css'; // Import styles as a module

type DialogContent = 'TOKEN' | 'ICO' | 'ROADMAP' | null;

const CaoBadge: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeDialog, setActiveDialog] = useState<DialogContent>(null);
  const [isHovering, setIsHovering] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (badgeRef.current) {
        const rect = badgeRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = (y - centerY) / centerY * 30;
        const tiltY = (centerX - x) / centerX * 30;

        setTilt({ x: tiltX, y: tiltY });
      }
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
      setIsHovering(false);
    };

    const badge = badgeRef.current;
    if (badge) {
      badge.addEventListener('mousemove', handleMouseMove);
      badge.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (badge) {
        badge.removeEventListener('mousemove', handleMouseMove);
        badge.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleCircleClick = (content: DialogContent) => {
    console.log('Circle clicked:', content);
    setActiveDialog(content);
  };

  return (
    <div 
      className="flex justify-center items-center py-8"
      ref={badgeRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        className={`w-64 h-64 md:w-80 md:h-80`}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="6 -6 512 512"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="49.64" y1="250" x2="474.36" y2="250">
              <stop offset="0" stopColor="rgb(0, 255, 153)" />
              <stop offset="1" stopColor="rgb(51, 204, 255)" />
            </linearGradient>
            <path id="tokenPath" d="M404.8 68.7A35.3,35.3 0 0 1 404.8,139.3A35.3,35.3 0 0 1 404.8,68.7" />
            <path id="icoPath" d="M60.8 254.2A35,35 0 0 1 60.8,324.8A35,35 0 0 1 60.8,254.2" />
            <path id="roadmapPath" d="M300 415A35,35 0 0 1 300,485A35,35 0 0 1 300,415" />
          </defs>
          
          <g className={isHovering ? styles.paused : styles.rotatingGroup}>
            <circle cx="262" cy="250" r="204.4" fill="none" stroke="url(#gradient)" strokeWidth="16" strokeMiterlimit="10" />
            <g onClick={() => handleCircleClick('TOKEN')} className="cursor-pointer" style={{ pointerEvents: 'all' }}>
              <circle cx="404.8" cy="104" r="25.3" fill="url(#gradient)" />
              <text className={`${styles.curvedText} ${styles.textPath}`}>
                <textPath xlinkHref="#tokenPath" startOffset="13%">
                  <tspan letterSpacing="0.2em">TOKEN</tspan>
                </textPath>
              </text>
            </g>
            <g onClick={() => handleCircleClick('ICO')} className="cursor-pointer" style={{ pointerEvents: 'all' }}>
              <circle cx="60.8" cy="289.5" r="24.9" fill="url(#gradient)" />
              <text className={`${styles.curvedText} ${styles.textPath}`}>
                <textPath xlinkHref="#icoPath" startOffset="74%">
                  <tspan letterSpacing="0.2em">ICO</tspan>
                </textPath>
              </text>
            </g>
            <g onClick={() => handleCircleClick('ROADMAP')} className="cursor-pointer" style={{ pointerEvents: 'all' }}>
              <circle cx="300" cy="450" r="25" fill="url(#gradient)" />
              <text className={`${styles.curvedText} ${styles.textPath}`}>
                <textPath xlinkHref="#roadmapPath" startOffset="48%">
                  <tspan letterSpacing="0.2em">ROADMAP</tspan>
                </textPath>
              </text>
            </g>
          </g>
          
          <g style={{ pointerEvents: 'none' }}>
            <circle cx="262" cy="250" r="95" fill="rgba(255, 255, 255, 0.2)" />
            <image 
              xlinkHref="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caonabo_logo_nbg-xT1yGfi4GGvqwdM0HhcWfTR2K2KVMY.png" 
              x="85" 
              y="75" 
              width="350" 
              height="350"
            />
          </g>
        </svg>
      </div>
      {activeDialog && (
        <CircularDialog 
          content={activeDialog} 
          onClose={() => setActiveDialog(null)} 
        />
      )}
    </div>
  );
};

export default CaoBadge;