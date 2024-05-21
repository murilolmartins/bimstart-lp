'use client';

import React from 'react';
import Image from 'next/image';
import { equipmentsData } from '@/constants/tecnology';



const Equipments: React.FC = () => {
    return (
        <>
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Setup de equipamentos com tecnologia de ponta.</h2>
                    </div>
                    <div className="row justify-content-center">
                        {equipmentsData &&
                            equipmentsData.map((value, i) => (
                                <div
                                    className="col-lg-4 col-sm-6"
                                    key={i}
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay={value.aosDelay}
                                >
                                    <div
                                        className="service-card-one bg-fcfbfb text-center bg-white d-flex flex-column align-content-center justify-content-center pt-1"
                                        style={{
                                            minHeight: '700px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                alignSelf: 'center'
                                            }}
                                        >
                                            <Image
                                                src={value.image}
                                                alt="image"
                                                width={value.size}
                                                height={value.size}
                                            />
                                        </div>
                                        <h3
                                            className="mt-5 border-bottom pb-3"
                                            style={{
                                                minHeight: '80px'
                                            }}
                                        >
                                            {value.title}
                                        </h3>
                                        <p>{value.shortText}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Equipments;
