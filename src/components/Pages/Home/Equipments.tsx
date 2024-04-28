'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import equipmentsImg from '../../../../public/images/home/equipments/equipments.png';

const Equipments: React.FC = () => {
    return (
        <>
            <div
                className="ptb-100"
                style={{
                    background:
                        'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)'
                }}
            >
                <div className="container">
                    <div className="section-title">
                        <h2
                            style={{
                                color: 'white'
                            }}
                        >
                            Equipamentos de ponta
                        </h2>
                    </div>

                    <div className="row justify-content-center">
                        <div
                            className="shape"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            <Image
                                src={equipmentsImg}
                                alt="Shape Image"
                                width={800}
                                height={380}
                            />
                        </div>
                    </div>

                    <div
                        className="mt-5"
                        style={{
                            textAlign: 'center'
                        }}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        <Link href="/portfolio" className="btn btn-primary">
                            Saiba Mais
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Equipments;
