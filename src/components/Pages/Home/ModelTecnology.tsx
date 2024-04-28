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
                        <div className="col-lg-7 col-md-12">
                            <div className="bc-what-we-do-content">
                                <div
                                    className="section-title"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                >
                                    <h2 className='mb-5'>Tenologia de Modelgem</h2>
                                    <p
                                        style={{
                                            maxWidth: '640px'
                                        }}
                                    >
                                        O BS Modeler é um conjunto de
                                        automatizações em diversas etapas do
                                        processo de captura de realidade, de
                                        forma a torná-lo cada vez mais rápido.
                                        <br />
                                        <br />
                                        Gradualmente almeja-se unir a soma desse
                                        array de automatizações em um SaaS capaz
                                        de entregar o processo de ponta a ponta,
                                        solução capaz de revolucionar como os
                                        projetos de engenharia, acompanhamento
                                        de obras, gerenciamento de propriedades,
                                        e até mesmo de cidades, é feito hoje em
                                        dia.
                                    </p>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <Image
                                            src={bsmlogosmall}
                                            alt="image"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div
                                className="bc-what-we-do-image"
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="400"
                            >
                                <Image
                                    src={bsmlogo}
                                    alt="image"
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
