'use client';

import React from 'react';

const GIS: React.FC = () => {
    return (
        <>
            <div
                className="ptb-100"
                style={{
                    backgroundImage: `url(/images/tecnology/gis/gis.webp)`
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
                                        GIS (Geographic Information System)
                                    </h2>
                                    <div>
                                        <p
                                            style={{
                                                color: '#fff'
                                            }}
                                        >
                                            Geographic Information System
                                            (Sistema de Informação Geográfica) é
                                            uma ferramenta que permite capturar,
                                            armazenar, analisar e visualizar
                                            dados geográficos para melhor
                                            compreensão e tomada de decisões. Na
                                            BIM START, o uso de SIG é
                                            fundamental para integrar dados
                                            geoespaciais coletados durante o
                                            levantamento em campo, como
                                            informações topográficas,
                                            geotécnicas, geológicas e
                                            ambientais. Por meio de sistemas de
                                            informação geográfica, podemos criar
                                            mapas interativos, realizar análises
                                            espaciais avançadas, identificar
                                            padrões geográficos relevantes para
                                            os projetos e visualizar informações
                                            geográficas em contextos
                                            tridimensionais. Isso proporciona
                                            uma visão holística do ambiente de
                                            trabalho, auxilia na identificação
                                            de áreas de risco, na otimização de
                                            rotas e na gestão eficiente dos
                                            recursos naturais e urbanos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GIS;
