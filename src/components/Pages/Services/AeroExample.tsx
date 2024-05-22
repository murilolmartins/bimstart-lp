import React from 'react';

import Image from 'next/image';
import aeroExampleImg from '../../../../public/images/services/aeroexample.png';

const AeroExample: React.FC = () => {
    return (
        <>
            <div
                className="ptb-70"
                style={{
                    backgroundColor: '#0D0D0D'
                }}
            >
                <Image
                    src={aeroExampleImg}
                    alt="Aero Example"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </div>
        </>
    );
};

export default AeroExample;
