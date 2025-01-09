// Image.tsx
import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;  // Optional width prop
    height?: number; // Optional height prop
}

const Image: React.FC<ImageProps> = ({ src, alt, className, width, height }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={className} 
            width={width} // Set the width
            height={height} // Set the height
        />
    );
};

export default Image;