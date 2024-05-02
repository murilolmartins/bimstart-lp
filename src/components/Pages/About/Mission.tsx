'use client';

import React from 'react';
import Image from 'next/image';

import missionImg from '../../../../public/images/about/mission/16.png';

const Mission: React.FC = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="about-image"
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <Image
                                src={missionImg}
                                alt="image"
                                width={600}
                                height={750}
                                style={{
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div
                            className="about-content about-content-two"
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            <div className="section-title">
                                <h2>Nossa Missão</h2>
                                <p>
                                    A missão da BIM Start é oferecer serviços de
                                    engenharia de alta qualidade, aproveitando a
                                    tecnologia de captura de realidade e a
                                    metodologia BIM. Nosso compromisso é gerar
                                    valor para nossos clientes,
                                    proporcionando-lhes projetos e
                                    empreendimentos mais produtivos, precisos e
                                    seguros, sempre com excelência em nossos
                                    serviços.
                                </p>
                            </div>

                            <div className="about-text">
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Excelência em Serviços de Engenharia
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Geração de Valor para os Clientes
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Produtividade, Precisão e Segurança
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
