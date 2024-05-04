'use client';

import React from 'react';
import Link from 'next/link';

const CtaArea: React.FC = () => {
    return (
        <>
            <div className="cta-area-two ptb-100">
                <div className="container">
                    <div className="cta-content">
                        <span
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            Ainda tem dúvidas?
                        </span>
                        <h3
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            Mande uma mensagem para nós!
                        </h3>
                    </div>

                    <div
                        className="cta-btn-box"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        <Link
                            href="/contact/"
                            className="btn btn-secondary bg-white"
                            style={{
                                textTransform: 'none'
                            }}
                        >
                            Entre em Contato
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaArea;
