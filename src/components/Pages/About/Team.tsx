'use client';

import React from 'react';

import teamImage1 from '../../../../public/images/about/team/team.png';
import Image from 'next/image';

const Team: React.FC = () => {
    return (
        <>
            <div className="team-area ptb-100"></div>
            <Image src={teamImage1} alt="image" width={1920} height={1200} className='team-image-next' />
        </>
    );
};

export default Team;
