import modelImg from '../../../../public/images/services/bim-model/model.png';
import cloundImg from '../../../../public/images/services/bim-model/cloud.png';
import arrowImg from '../../../../public/images/services/bim-model/arrow.png';
import Image from 'next/image';

export const BimModel = () => {
    return (
        <>
            <div className="pt-100 pb-70">
                <div className="container">
                    <div
                        className="section-title"
                        style={{
                            maxWidth: '100%'
                        }}
                    >
                        <h2
                            style={{
                                color: '#808080'
                            }}
                        >
                            Modelagem BIM
                        </h2>
                    </div>
                    <div className="w-100">
                        <p>
                            O processo de modelagem BIM transforma dados brutos
                            em modelos digitais detalhados e integrados,
                            essenciais para a coordenação e execução de projetos
                            complexos. Utilizando projetos existentes ou nuvens
                            de pontos capturadas por laser scanners, são criados
                            modelos BIM que são fundamentais para a detecção
                            precoce de interferências entre disciplinas e a
                            extração precisa de quantitativos.
                        </p>
                        <p>
                            A equipe experiente utiliza uma vasta biblioteca de
                            componentes para garantir a qualidade e integridade
                            dos modelos gerados. A modelagem BIM melhora a
                            precisão e eficiência dos projetos, facilitando a
                            integração com orçamentos e cronogramas, além de
                            permitir a simulação de cenários construtivos. Isso
                            não só melhora a coordenação entre equipes, mas
                            também reduz erros e retrabalhos, economizando tempo
                            e recursos.
                        </p>
                        <p>
                            A modelagem BIM, portanto, oferece uma solução
                            completa e integrada que maximiza a eficiência,
                            precisão e coordenação dos projetos dos clientes,
                            garantindo seu sucesso do início ao fim.
                        </p>
                    </div>

                    <div className="d-flex justify-content-between align-content-center flex-wrap w-100 bim-model-sequence pt-70">
                        <Image
                            src={cloundImg}
                            alt="Nuvem de pontos"
                            width={500}
                            height={100}
                            className='description-img'
                        />

                        <Image
                            src={arrowImg}
                            alt="Seta"
                            width={80}
                            height={50}
                            style={{
                                alignSelf: "center"
                            }}
                            className='arrow-img'
                        />

                        <Image
                            src={modelImg}
                            alt="Modelagem BIM"
                            width={500}
                            height={300}
                            className='description-img'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BimModel;
