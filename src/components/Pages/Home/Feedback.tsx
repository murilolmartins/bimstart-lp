'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import leftQuote from '../../../../public/images/home/feedback/quote.svg';
import { feedbacskData } from '@/constants/home';

const Feedback: React.FC = () => {
    return (
        <>
            <div className="feedback-area ptb-100">
                <div className="container">
                    <div className="feedback-list">
                        <Swiper
                            autoHeight={true}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true,
                                pauseOnMouseEnter: true
                            }}
                            spaceBetween={30}
                            slidesPerView={1}
                            modules={[Autoplay, Pagination]}
                            className="feedback-slides"
                        >
                            {feedbacskData &&
                                feedbacskData.map((value, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="feedback-image">
                                            <div className="feedback-image-container">
                                                <Image
                                                    src={value.image}
                                                    alt="Customer Image"
                                                    width={120}
                                                    height={120}
                                                    style={{
                                                        borderRadius: '50%'
                                                    }}
                                                />
                                                <div className="quotes-icon">
                                                    <Image
                                                        src={leftQuote}
                                                        alt="Left Quote"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-feedback">
                                            <p>
                                                <q>{value.feedbacskText}</q>
                                            </p>

                                            <div className="bar"></div>

                                            <h3>{value.name}</h3>
                                            <span>{value.designation}</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>

                {/* Client image */}
                <div className="client-image-box"></div>
            </div>
        </>
    );
};

export default Feedback;
