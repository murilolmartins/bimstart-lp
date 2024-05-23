'use client';

import React from 'react';
import Image from 'next/image';

import bsmlogo from '../../../../public/images/home/model-tecnology/bsmodeler.png';
import bsmlogosmall from '../../../../public/images/home/model-tecnology/bsmodeler-small.png';

const ModelTenology: React.FC = () => {
    return (
        <>
            <div className="ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="bc-what-we-do-content">
                                <div
                                    className="section-title"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                >
                                    <h2 className="mb-5">
                                        Tecnologia de Modelagem
                                    </h2>
                                    <p
                                        style={{
                                            maxWidth: '680px'
                                        }}
                                    >
                                        O BS Modeler é uma ferramenta
                                        proprietária da BIM START que
                                        revoluciona a Captura de Realidade e a
                                        modelagem BIM. Integrando tecnologias
                                        avançadas como machine learning, visão
                                        computacional e GIS, o BS Modeler
                                        transforma dados coletados de scanners a
                                        laser, drones e sensores em modelos 3D
                                        altamente precisos e detalhados.
                                        <br />
                                        <br />
                                        Com essa ferramenta, é possível detectar
                                        interferências, extrair quantitativos,
                                        integrar projetos com orçamento e
                                        cronograma, além de realizar análises
                                        avançadas. O BS Modeler assegura que os
                                        projetos sejam eficientes, seguros e
                                        econômicos, garantindo a qualidade e a
                                        integridade dos modelos para nossos
                                        clientes. Em essência, o BS Modeler é a
                                        solução definitiva para converter dados
                                        do mundo real em informações digitais
                                        valiosas para o planejamento e execução
                                        de projetos complexos.
                                    </p>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Image
                                            src={bsmlogosmall}
                                            alt="BS Modeler Logo"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div
                                className="bc-what-we-do-image how-it-works-image"
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="400"
                            >
                                <Image
                                    src={bsmlogo}
                                    alt="BS Modeler Logo 2"
                                    width={500}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModelTenology;
