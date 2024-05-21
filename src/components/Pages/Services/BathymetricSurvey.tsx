'use client';

import React from 'react';

const BathymetricSurvey: React.FC = () => {
    return (
        <>
            <div
                className="ptb-100"
                style={{
                    backgroundImage: `url(/images/services/bathymetric-survey/bathymetricsurvey.webp)`
                }}
            >
                <div className="container">
                    <div
                        className={`row align-items-center justify-content-between`}
                    >
                        <div className="col-lg-5 col-md-12"></div>
                        <div className="col-lg-7 col-md-12">
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
                                        Levantamento Batimétrico Não Tripulado
                                    </h2>
                                    <div>
                                        <p
                                            style={{
                                                color: '#fff'
                                            }}
                                        >
                                            Os serviços de levantamento
                                            batimétrico não tripulado utilizam
                                            USVs (Unmanned Surface Vehicles),
                                            também conhecidos como drones
                                            marinhos de superfície. Equipados
                                            com ecobatímetros e sistemas GNSS
                                            RTK, esses veículos são capazes de
                                            mapear corpos d&apos;água com alta
                                            precisão e eficiência. O uso de USVs
                                            permite a coleta de dados
                                            batimétricos em áreas de difícil
                                            acesso ou de risco elevado,
                                            garantindo a segurança da equipe e a
                                            qualidade dos dados obtidos. Os
                                            drones marinhos são controlados
                                            remotamente, o que reduz a
                                            necessidade de grandes equipes e a
                                            logística complexa associada aos
                                            levantamentos batimétricos
                                            tradicionais. Os dados coletados são
                                            processados para criar mapas
                                            detalhados do fundo dos corpos
                                            d&apos;água, essenciais para projetos de
                                            engenharia hidráulica, dragagem,
                                            construção de infraestruturas
                                            aquáticas e monitoramento ambiental.
                                            Isso permite uma análise precisa e
                                            informada, contribuindo para a
                                            eficiência e segurança dos projetos.
                                            A batimetria não tripulada oferece
                                            uma solução moderna e eficiente para
                                            a coleta de dados subaquáticos,
                                            garantindo a precisão e segurança
                                            necessárias para o sucesso de
                                            projetos relacionados a corpos
                                            d&apos;água.
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

export default BathymetricSurvey;
