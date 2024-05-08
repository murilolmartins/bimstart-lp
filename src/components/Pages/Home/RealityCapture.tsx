'use client';

import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Image from 'next/image';

import realityCaptureImg from '../../../../public/images/home/reality-capture/reality-capture.webp';

const RealityCapture: React.FC = () => {
    const [toggler, setToggler] = useState(false);
    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={['https://www.youtube.com/watch?v=w-AkLPEnQ0k']}
            />

            <div className="bc-who-we-are-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Captura de Realidade</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div
                                className="bc-who-we-are-content"
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                            >
                                <p>
                                    A captura de realidade é um processo
                                    fundamental em diversos setores como o da
                                    construção civil, indústria e energia, por
                                    exemplo. O processo consiste na coleta de
                                    informações detalhadas do mundo real e
                                    transformá-las em dados digitais. Isso é
                                    feito utilizando tecnologias como laser
                                    scanners, câmeras avançadas e sensores
                                    especiais.<br />
                                    Imagine que você está construindo um novo
                                    edifício ou complexo industrial. Com a
                                    captura de realidade, é possível coletar
                                    dados precisos sobre o local, como a forma
                                    do terreno, a estrutura de construção
                                    existente e outros detalhes importantes.
                                    Esses dados são então processados por
                                    computadores para criar modelos digitais 3D
                                    altamente detalhados, que são essenciais
                                    para o planejamento, projeto e execução de
                                    projetos.<br />
                                    A captura de realidade, portanto, desempenha
                                    um papel crucial para tornar as operações
                                    nos setores da construção civil, indústria e
                                    energia mais precisas, eficientes e seguras,
                                    fornecendo informações do mundo real em um
                                    formato digital que pode ser facilmente
                                    utilizado em projetos e processos.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div
                                className="bc-who-we-are-image"
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                            >
                                <Image
                                    src={realityCaptureImg}
                                    alt="image"
                                    width={720}
                                    height={577}
                                />
                                <div
                                    onClick={() => setToggler(!toggler)}
                                    className="video-btn popup-video"
                                >
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RealityCapture;
