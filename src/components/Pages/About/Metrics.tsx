'use client';

import React from 'react';
import Image from 'next/image';

import map from '../../../../public/images/about/metrics/map.png';
import { metricsData } from '@/constants/about';


const Metrics: React.FC = () => {
    return (
        <>
            <div className="funfacts-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>Nossas Métricas</h2>
                        <p>
                            Empresas em todo o Brasil confiam na BIM Start para
                            digitalizar seus empreendimentos.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        {metricsData &&
                            metricsData.slice(0, 4).map((value, i) => (
                                <div className="col-lg-3 col-sm-6" key={value.shortText}>
                                    <div
                                        className="funfact"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={value.aosDelay}
                                    >
                                        <i className={value.iconName}></i>
                                        <h3>{value.number}</h3>
                                        <p>{value.shortText}</p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="map-bg">
                        <Image src={map} alt="map" width={910} height={443} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Metrics;
