'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { howItWorksData } from '@/constants/home';



const HowItWorks: React.FC = () => {
    return (
        <>
            <div className="pt-100 pb-70 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>Como Funciona?</h2>
                    </div>
                   
                    <div className="row justify-content-center">
                        {howItWorksData &&
                            howItWorksData.slice(0, 6).map((value, i) => (
                                <div
                                    className="col-lg-4 col-sm-6"
                                    key={i}
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay={value.aosDelay}
                                >
                                    <div className="service-card-one bg-fcfbfb text-center bg-white">
                                        <Image
                                            src={value.image}
                                            alt="image"
                                            width={400}
                                            height={400}
                                        />
                                        <h3 className="mt-5 border-bottom pb-3">
                                            <Link href={value.viewDetails}>
                                                {value.title}
                                            </Link>
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

export default HowItWorks;
