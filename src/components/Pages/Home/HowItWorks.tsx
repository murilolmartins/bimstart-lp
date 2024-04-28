'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const servicesData = [
    {
        image: '/images/home/how-it-works/card-1.png',
        title: 'Levantamento em campo',
        shortText:
            'Escaneamento com equipamentos laser para captura de detalhes tridimensionais do ambiente físico.',
        viewDetails: '/services/service-details/',
        aosDelay: '100'
    },
    {
        image: '/images/home/how-it-works/card-3.png',
        title: 'Processamento de dados',
        shortText:
            'Integração dos dados coletados em campo em um conjunto coeso e alinhado, com remoção de ruídos ou interferencias visuais.',
        viewDetails: '/services/service-details/',
        aosDelay: '200'
    },
    {
        image: '/images/home/how-it-works/card-2.png',
        title: 'Projetos',
        shortText:
            'Representações virtuais fiéis do ambiente real, que podem ser usadas para análises avançadas, simulações, verificações e tomada de decisões.',
        viewDetails: '/services/service-details/',
        aosDelay: '300'
    }
];

const HowItWorks: React.FC = () => {
    return (
        <>
            <div className="pt-100 pb-70 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>Como Funciona?</h2>
                    </div>
                   
                    <div className="row justify-content-center">
                        {servicesData &&
                            servicesData.slice(0, 6).map((value, i) => (
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
