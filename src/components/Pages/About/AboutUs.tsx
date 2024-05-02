'use client';

import React from 'react';
import Image from 'next/image';

import ceoTalkingImg from '../../../../public/images/about/aboutus/18.png';
import ceoTalkingImg2 from '../../../../public/images/about/aboutus/17.png';
import image1 from '../../../../public/images/about/aboutus/box-1.png';
import image2 from '../../../../public/images/about/aboutus/box-2.png';
import Link from 'next/link';

const AboutUs: React.FC = () => {
    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className="d-flex gap-4 about-us-container">
                        <div className="col-lg-6 col-md-12 d-flex flex-column gap-2 images-container">
                            <div className="bc-what-we-do-image">
                                <Image
                                    src={ceoTalkingImg}
                                    alt="image"
                                    width={650}
                                    height={476}
                                    style={{
                                        width: '100%',
                                        borderRadius: '5px'
                                    }}
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="p-4 about-us-card">
                                    <h2>500+</h2>
                                    <p>Projetos Realizados</p>
                                </div>
                                <div className="bc-what-we-do-image ceo-image-2">
                                    <Image
                                        src={ceoTalkingImg2}
                                        alt="image"
                                        width={440}
                                        height={476}
                                        style={{
                                            borderRadius: '5px'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-50 flex-grow-1 d-flex flex-column justify-content-between about-us-container-text">
                            <div className="bc-what-we-do-content">
                                <div className="section-title mb-5">
                                    <h2 className="">
                                        Levamos o campo para dentro do
                                        escritório!
                                    </h2>
                                    <p>
                                        Transformando espaços físicos em dados
                                        digitais ou modelos inteligentes, a BIM
                                        START transporta o campo para dentro do
                                        seu ambiente de trabalho.
                                    </p>
                                </div>

                                <div className="d-flex flex-column gap-3 about-us-info-cards-container">
                                    <div className="d-flex gap-3">
                                        <Image
                                            src={image2}
                                            alt="image"
                                            width={80}
                                            height={80}
                                            className="card-image"
                                        />
                                        <div className="bc-what-we-do-box">
                                            <h3>Tecnologia</h3>
                                            <p>
                                                A captura de realidade
                                                transforma o ambiente físico em
                                                modelos digitais precisos.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <Image
                                            src={image1}
                                            alt="image"
                                            width={80}
                                            height={80}
                                            className="card-image"
                                        />
                                        <div className="bc-what-we-do-box">
                                            <h3>Infinitas possibilidades</h3>
                                            <p>
                                                Nossas soluções abrem novos
                                                horizontes para projetos
                                                inovadores e eficientes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="w-100 mt-3"
                                style={{
                                    textAlign: 'center'
                                }}
                            >
                                <Link
                                    href="/portfolio"
                                    className="btn btn-primary w-100"
                                >
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
