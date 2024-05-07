'use client';

import React from 'react';
import Image from 'next/image';

const servicesData = [
    {
        image: '/images/tecnology/equipments/card-1.png',
        title: 'Laser Scanner Leica RTC 360',
        shortText:
            'Utilizando tecnologia de ponta, o scanner Leica RTC 360 oferece precisão excepcional na captura de dados em 3D, essencial para projetos de alta qualidade.',
        aosDelay: '100',
        size: 400
    },
    {
        image: '/images/tecnology/equipments/card-2.png',
        title: 'Estação Total Leica FlexLine TS06',
        shortText:
            'Equipamento indispensável em levantamentos topográficos, a estação total garante a precisão necessária para mapeamentos detalhados e confiáveis.',
        aosDelay: '200',
        size: 370
    },
    {
        image: '/images/tecnology/equipments/card-3.png',
        title: 'GNSS Leica GS18 T',
        shortText:
            'O sistema GNSS proporciona coordenadas geoespaciais precisas, tornando-o fundamental para a localização e orientação em campo.',
        viewDetails: '/services/service-details/',
        aosDelay: '300',
        size: 335
    },
    {
        image: '/images/tecnology/equipments/card-4.png',
        title: 'Câmera Dji Zenmuse P1',
        shortText:
            'Com alta resolução, a câmera DJI Zenmuse P1 é ideal para captura de imagens aéreas em alta definição, essenciais para análises detalhadas.',
        aosDelay: '400',
        size: 333
    },
    {
        image: '/images/tecnology/equipments/card-5.png',
        title: 'Sensor Dji Zenmuse L1',
        shortText:
            'O sensor LiDAR DJI Zenmuse L1 oferece mapeamento preciso de terrenos e estruturas, com capacidade de captura em múltiplas camadas.',
        aosDelay: '500',
        size: 333
    },
    {
        image: '/images/tecnology/equipments/card-6.png',
        title: 'Sensor Dji Zenmuse L2',
        shortText:
            'Com tecnologia multiespectral, o sensor DJI Zenmuse L2 permite análises detalhadas em diferentes espectros, proporcionando insights valiosos.',
        aosDelay: '600',
        size: 360
    },
    {
        image: '/images/tecnology/equipments/card-7.png',
        title: 'Drone Dji Matrice 300',
        shortText:
            'Robusto e confiável, o drone DJI Matrice 200 é a escolha ideal para levantamentos aéreos precisos e eficientes.',
        aosDelay: '700',
        size: 334
    },
    {
        image: '/images/tecnology/equipments/card-8.png',
        title: 'Drone DJI Mavic Pro 2',
        shortText:
            'Portátil e de alta qualidade, o drone DJI Mavic Pro 2 oferece versatilidade e desempenho para captura de imagens e vídeos em diversas situações.',
        aosDelay: '800',
        size: 333
    },
    {
        image: '/images/tecnology/equipments/card-9.png',
        title: 'Ecobatímetro',
        shortText:
            "Equipamento essencial para medição de profundidade em corpos d'água, o ecobatímetro garante dados precisos em levantamentos aquáticos.",
        aosDelay: '900',
        size: 370
    },
    {
        image: '/images/tecnology/equipments/card-10.png',
        title: 'Impressora 3D',
        shortText:
            'Utilizada para fabricação de acessórios personalizados, a impressora 3D contribui para a otimização dos processos de levantamento em campo e personalização de equipamentos.',
        aosDelay: '1000',
        size: 400
    }
];

const Equipments: React.FC = () => {
    return (
        <>
            <div className="pt-100 pb-70 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>Nossos Equipamentos</h2>
                    </div>
                    <div className="row justify-content-center">
                        {servicesData &&
                            servicesData.map((value, i) => (
                                <div
                                    className="col-lg-4 col-sm-6"
                                    key={i}
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay={value.aosDelay}
                                >
                                    <div
                                        className="service-card-one bg-fcfbfb text-center bg-white d-flex flex-column align-content-center justify-content-center pt-1"
                                        style={{
                                            minHeight: '700px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                alignSelf: 'center'
                                            }}
                                        >
                                            <Image
                                                src={value.image}
                                                alt="image"
                                                width={value.size}
                                                height={value.size}
                                            />
                                        </div>
                                        <h3
                                            className="mt-5 border-bottom pb-3"
                                            style={{
                                                minHeight: '80px'
                                            }}
                                        >
                                            {value.title}
                                        </h3>
                                        <p>{value.shortText}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Equipments;
