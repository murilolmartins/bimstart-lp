'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay
} from 'swiper/modules';

const MainBanner: React.FC = () => {
    return (
        <>
           

            <Swiper
                autoHeight={true}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                mousewheel={true}
                keyboard={true}
                modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                    Autoplay
                ]}
                className="hero-slider"
            >
                <SwiperSlide>
                    <div
                        className="hero-banner overly"
                        style={{
                            backgroundImage: `url(/images/home/banner/31.webp)`
                        }}
                    >
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="main-banner-content left">
                                        <h1>
                                            Capturing Reality to Design the
                                            Future
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="hero-banner overly"
                        style={{
                            backgroundImage: `url(/images/home/banner/14.webp)`
                        }}
                    >
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="main-banner-content right left">
                                        <h1>
                                            Capturing Reality to Design the
                                            Future
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="hero-banner overly"
                        style={{
                            backgroundImage: `url(/images/home/banner/8.webp)`
                        }}
                    >
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="main-banner-content left">
                                        <h1>
                                            Capturing Reality to Design the
                                            Future
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default MainBanner;
