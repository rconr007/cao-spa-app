import React from 'react'

const LogoVer1: React.FC = () => {
  return (
    <div className="absolute top-4 left-4">
      <a href="#" className="flex items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 relative">
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
            </defs>
            
            <g className="animate-spin-slow">
              <circle cx="262" cy="250" r="204.4" fill="none" stroke="url(#gradient)" strokeWidth="16" strokeMiterlimit="10" />
              <circle cx="404.8" cy="104" r="25.3" fill="url(#gradient)" />
              <circle cx="60.8" cy="289.5" r="24.9" fill="url(#gradient)" />
              <circle cx="300" cy="450" r="25" fill="url(#gradient)" />
            </g>
            
            <circle cx="262" cy="250" r="95" fill="rgba(255, 255, 255, 0.2)" />
            <image xlinkHref="caonabo_logo_nbg.png" x="85" y="75" width="350" height="350" />
          </svg>
        </div>
        <div className="text-2xl md:text-3xl font-bold text-white mt-2">CAONABO</div>
        <div className="text-sm md:text-base text-gray-400 mt-1">
          Cryptocurrency brought down to the masses
        </div>
      </a>
    </div>
  )
}

export default LogoVer1

