// src/components/AdvantagesBanner.tsx

import React from 'react';
import './AdvantagesBanner.css'; // Import the CSS file for styling

const advantages = [
  "Decentralized",
  "Secure",
  "Transparent",
  "Fast Transactions",
  "Low Fees",
  "Global Access",
  "24/7 Trading",
  "Inflation Resistant"
];

const AdvantagesBanner: React.FC = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        {advantages.concat(advantages).map((advantage, index) => (
          <div key={index} className="advantage-item">
            {advantage}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesBanner;