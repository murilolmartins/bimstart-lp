'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TecnologySectionProps {
    title: string;
    description: React.ReactNode;
    img: {
        src: StaticImageData;
        alt: string;
    };
    invert?: boolean;
    black?: boolean;
    gray?: boolean;
}

const TecnologySection: React.FC<TecnologySectionProps> = ({
    title,
    description,
    img,
    invert = false,
    black = false,
    gray = false
}: TecnologySectionProps) => {
    return (
        <>
            <div
                className={`ptb-100  ${gray ? 'bg-fcfbfb' : ''}`}
                style={{
                    backgroundColor: black ? '#0D0D0D' : '',
                }}
            >
                <div className="container">
                    <div
                        className={`row align-items-center justify-content-between ${
                            invert ? 'flex-row-reverse' : ''
                        }`}
                    >
                        <div className="col-lg-6 col-md-12">
                            <div className="bc-what-we-do-content">
                                <div
                                    className="section-title"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                >
                                    <h2
                                        className="mb-5"
                                        style={{
                                            color: black ? '#fff' : 'initial'
                                        }}
                                    >
                                        {title}
                                    </h2>
                                    <div>{description}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div
                                className="bc-what-we-do-image"
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TecnologySection;
