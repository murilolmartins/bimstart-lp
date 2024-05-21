'use client';

import React from 'react';
import Image from 'next/image';
import { bimModelCardsData } from '@/constants/services';

const BIMModelCards: React.FC = () => {
    return (
        <>
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        {bimModelCardsData &&
                            bimModelCardsData.map((value) => (
                                <div
                                    className="col-lg-4 col-sm-6"
                                    key={value.title}
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay={value.aosDelay}
                                >
                                    <div
                                        className="service-card-one bg-fcfbfb text-center bg-white d-flex flex-column pt-5"
                                        style={{
                                            minHeight: '615px'
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
                                                width={150}
                                                height={200}
                                            />
                                        </div>
                                        <h3
                                            className="mt-5 border-bottom pb-3"
                                            style={{
                                                minHeight: '70px'
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

export default BIMModelCards;
