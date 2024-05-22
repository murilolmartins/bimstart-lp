'use client';

import React from 'react';
import Image from 'next/image';

import asBuiltImg from '../../../../public/images/services/as-built/asbuilt.png';

const AsBuilt: React.FC = () => {
    return (
        <>
            <div
                className="ptb-100"
                style={{
                    backgroundImage: `url(/images/services/as-built/bg.png)`
                }}
            >
                <div className="container">
                    <div
                        className={`row align-items-center justify-content-between`}
                    >
                        <div className="col-lg-6 col-md-12">
                            <div className="bc-what-we-do-content">
                                <div
                                    className="section-title"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                >
                                    <h2
                                        className="mb-5"
                                        style={{
                                            color: '#fff'
                                        }}
                                    >
                                        AS BUILT e AS IS
                                    </h2>
                                    <div>
                                        <p
                                            style={{
                                                color: '#fff'
                                            }}
                                        >
                                            Os serviços de As Built e As Is são
                                            a base fundamental para documentar e
                                            avaliar a condição real das
                                            construções. Projetos As Built
                                            registram detalhadamente o que foi
                                            construído, comparando com os planos
                                            originais para garantir que todas as
                                            especificações foram atendidas,
                                            assegurando a segurança e
                                            conformidade da obra. Já os projetos
                                            As Is são utilizados para avaliar a
                                            condição atual de estruturas
                                            existentes, especialmente quando não
                                            há documentação disponível ou quando
                                            a precisão das informações
                                            existentes é questionável.
                                        </p>
                                        <br />
                                        <p
                                            style={{
                                                color: '#fff'
                                            }}
                                        >
                                            Tecnologias de captura de realidade,
                                            como laser scanners e LiDARS
                                            aerotransportados, são utilizadas
                                            para coletar dados precisos do
                                            ambiente construído. Esses dados são
                                            processados e transformados em
                                            modelos digitais que representam
                                            fielmente a estrutura existente,
                                            proporcionando uma base sólida para
                                            qualquer intervenção futura. Esses
                                            serviços são fundamentais para
                                            manutenção, reformas ou para a
                                            validação de novos projetos sobre
                                            estruturas já consolidadas.
                                        </p>
                                        <br />
                                        <p
                                            style={{
                                                color: '#fff'
                                            }}
                                        >
                                            Os serviços de As Built e As Is
                                            garantem que os projetos sejam
                                            executados e mantidos conforme
                                            planejado, proporcionando segurança,
                                            conformidade e uma base confiável
                                            para futuras modificações e
                                            expansões.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div
                                className="bc-what-we-do-image"
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                            >
                                <Image
                                    src={asBuiltImg}
                                    alt="AS BUILT e AS IS"
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AsBuilt;
