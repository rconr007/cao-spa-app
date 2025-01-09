// member-dialog.tsx
import React from 'react';
import Image from './ui/Image'; // Import the Image component

interface MemberDetails {
    name: string;
    image: string;  // Path to the member's image
    description: string;  // Description or details about the member
}

const memberData: MemberDetails = {
    name: "Cayacoa",
    image: "path/to/cayacoa.jpg", // Replace with the actual path
    description: "Cayacoa is known for his expertise in blockchain technology and community building.",
};

const MemberDialog: React.FC = () => {
    return (
        <div>
            <h2>{memberData.name}</h2>
            <Image src={memberData.image} alt={memberData.name} />
            <p>{memberData.description}</p>
        </div>
    );
};

export default MemberDialog;