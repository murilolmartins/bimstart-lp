'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { partnersData } from '@/constants/home';



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
