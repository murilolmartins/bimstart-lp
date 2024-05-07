'use client';

import React from 'react';
import Image from 'next/image';

import equipmentsImg from '../../../../public/images/tecnology/setup/hearder-bg.png';

const Setup: React.FC = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div >
                            <div>
                                <h2 className='setup-title'>
                                    Setup de equipamentos com tecnologia de
                                    ponta.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div>
                            <Image
                                src={equipmentsImg}
                                alt="image"
                                width={1000}
                                height={750}
                                style={{
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Setup;
