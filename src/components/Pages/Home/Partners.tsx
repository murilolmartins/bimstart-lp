'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

const partnersData = [
    {
        image: '/images/home/partners/Auren.png'
    },
    {
        image: '/images/home/partners/Bosch.png'
    },
    {
        image: '/images/home/partners/BRK-Ambiental.png'
    },
    {
        image: '/images/home/partners/CER-Energia.png'
    },
    {
        image: '/images/home/partners/CESP.png'
    },
    {
        image: '/images/home/partners/Crasa.png'
    },
    {
        image: '/images/home/partners/CTG-Brasil.png'
    },
    {
        image: '/images/home/partners/Eletrobras.png'
    },
    {
        image: '/images/home/partners/Engemon.png'
    },
    {
        image: '/images/home/partners/Engie.png'
    },
    {
        image: '/images/home/partners/Exercito-Brasileiro.png'
    },
    {
        image: '/images/home/partners/G5-Engenharia.png'
    },
    {
        image: '/images/home/partners/Geplan.png'
    },
    {
        image: '/images/home/partners/Grupo-Kallas.png'
    },
    {
        image: '/images/home/partners/GT-Building.png'
    },
    {
        image: '/images/home/partners/Head-5.png'
    },
    {
        image: '/images/home/partners/Inter-Techne.png'
    },
    {
        image: '/images/home/partners/IPPER-Solar.png'
    },
    {
        image: '/images/home/partners/Itaipu-Binacional.png'
    },
    {
        image: '/images/home/partners/Kingspan.png'
    },
    {
        image: '/images/home/partners/Laguna.png'
    },
    {
        image: '/images/home/partners/Luiz-Volpato-Arq.png'
    },
    {
        image: '/images/home/partners/Maia-Melo.png'
    },
    {
        image: '/images/home/partners/Medabil.png'
    },
    {
        image: '/images/home/partners/MEP.png'
    },
    {
        image: '/images/home/partners/Nova-Engevix.png'
    },
    {
        image: '/images/home/partners/PEPSICO.png'
    },
    {
        image: '/images/home/partners/Piemonte.png'
    },
    {
        image: '/images/home/partners/Plaenge.png'
    },
    {
        image: '/images/home/partners/Positivo.png'
    },
    {
        image: '/images/home/partners/RAC.png'
    },
    {
        image: '/images/home/partners/Ricardo-Amaral.png'
    },
    {
        image: '/images/home/partners/San-Remo.png'
    },
    {
        image: '/images/home/partners/Scala.png'
    },
    {
        image: '/images/home/partners/Vale.png'
    },
    {
        image: '/images/home/partners/VLB-Engenharia.png'
    }
];

const Partners: React.FC = () => {
    return (
        <>
            <div className="ptb-100">
                    <div className="section-title">
                        <h2>Nossos Clientes</h2>
                    </div>
                    <Swiper
                        autoHeight={true}
                        spaceBetween={30}
                        autoplay={{
                            delay: 700,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                            waitForTransition: true
                        }}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 2
                            },
                            576: {
                                slidesPerView: 3
                            },
                            768: {
                                slidesPerView: 4
                            },
                            992: {
                                slidesPerView: 5
                            },
                            1200: {
                                slidesPerView: 6
                            }
                        }}
                        modules={[Autoplay, Navigation]}
                        className="partner-slides overflow-hidden"
                    >
                        {partnersData &&
                            partnersData.map((value, i) => (
                                <SwiperSlide key={i}>
                                    <div className="app-partner-item">
                                        <Image
                                            src={value.image}
                                            alt="partner"
                                            width={200}
                                            height={35}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
        </>
    );
};

export default Partners;
