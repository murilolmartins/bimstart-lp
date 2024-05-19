import realityCaptureImg from '../../public/images/tecnology/reality-capture/hearder-bg.png';
import bsmodelerImg from '../../public/images/tecnology/bs-modeler/bsmodeler.png';
import cloundBasedImg from '../../public/images/tecnology/cloud-based/cloud-based.png';
import computerVisionImg from '../../public/images/tecnology/computer-vision/computer-vision.webp';
import aiImg from '../../public/images/tecnology/ai/ai.png';

export const realityCapture = {
    title: 'Captura da Realidade',
    description: (
        <>
            <p>
                Na BIM START, a integração das tecnologias supracitadas aprimora
                o processo de Captura de Realidade e modelagem BIM, oferecendo
                soluções precisas e inovadoras para diversos setores. Cada uma
                dessas tecnologias contribui de maneira única para a eficácia e
                precisão dos projetos entregues aos clientes.
            </p>
            <br />
            <br />
            <p>
                Esses resultados são ainda mais potencializados pelo uso do BS
                Modeler, uma ferramenta proprietária que combina todas essas
                tecnologias para otimizar nossos serviços. Dessa forma,
                oferecemos aos nossos clientes modelos 3D detalhados e análises
                avançadas que garantem o sucesso e a segurança de seus projetos.
            </p>
        </>
    ),
    img: {
        src: realityCaptureImg,
        alt: 'Captura da Realidade'
    }
};

export const bsmodeler = {
    title: 'BS Modeler',
    description: (
        <>
            <p>
                O BS Modeler é uma ferramenta proprietária da BIM START que
                revoluciona a Captura de Realidade e a modelagem BIM. Integrando
                tecnologias avançadas como machine learning, visão computacional
                e GIS, o BS Modeler transforma dados coletados de scanners a
                laser, drones e sensores em modelos 3D altamente precisos e
                detalhados.
            </p>
            <br />
            <br />
            <p>
                O BS Modeler assegura que os projetos sejam eficientes, seguros
                e econômicos, garantindo a qualidade e a integridade dos modelos
                para nossos clientes. Em essência, o BS Modeler é a solução
                definitiva para converter dados do mundo real em informações
                digitais valiosas para o planejamento e execução de projetos
                complexos.
            </p>
        </>
    ),
    img: {
        src: bsmodelerImg,
        alt: 'BS Modeler'
    }
};

export const cloudBased = {
    title: 'Cloud Based',
    description: (
        <>
            <p>
                Cloud Based (Baseado em Nuvem) refere-se à utilização de
                recursos de computação, armazenamento e processamento
                disponíveis na nuvem, em vez de depender de infraestrutura
                local. Na BIM START, adotamos soluções em nuvem para
                armazenamento seguro de dados coletados durante a captura de
                realidade, colaboração remota em projetos, acesso flexível às
                informações e escalabilidade das operações. Por exemplo,
                utilizamos plataformas de computação em nuvem para armazenar e
                compartilhar grandes volumes de dados, como nuvens de pontos,
                modelos 3D e documentos técnicos, permitindo que equipes
                multidisciplinares trabalhem de forma colaborativa e eficiente,
                independentemente da localização geográfica. Além disso, a
                computação em nuvem oferece recursos de processamento poderosos,
                o que possibilita o processamento rápido e a análise avançada de
                dados para tomada de decisões fundamentadas.
            </p>
        </>
    ),
    img: {
        src: cloundBasedImg,
        alt: 'Clound Based'
    }
};

export const computerVision = {
    title: 'Computer Vision',
    description: (
        <>
            <p>
                Computer Vision (Visão Computacional) refere-se à capacidade de
                um sistema interpretar e entender o conteúdo visual de imagens
                ou vídeos. Na BIM START, a Computer Vision é uma tecnologia
                essencial para processar dados provenientes de laser scanners,
                câmeras avançadas e sensores especiais utilizados durante a
                captura de realidade. Por exemplo, podemos aplicar algoritmos de
                visão computacional para reconhecimento de padrões em imagens
                capturadas, identificação automática de elementos como
                estruturas, vegetação, veículos e pessoas, e mapeamento de
                informações visuais em modelos digitais tridimensionais. Isso
                permite uma análise mais detalhada do ambiente capturado,
                facilita a geração de modelos precisos e contribui para a tomada
                de decisões fundamentadas em dados visuais confiáveis.
            </p>
        </>
    ),
    img: {
        src: computerVisionImg,
        alt: 'Computer Vision'
    }
};

export const ai = {
    title: 'AI',
    description: (
        <>
            <p style={{
                color: '#FFFFFF'
            }}>
                Artificial Intelligence (Inteligência Artificial - IA) refere-se
                à capacidade de sistemas computacionais realizarem tarefas que
                normalmente exigiriam inteligência humana. Na BIM START, a
                Inteligência Artificial é aplicada em diversas áreas para
                otimizar processos, automatizar tarefas repetitivas e auxiliar
                na tomada de decisões inteligentes com base em dados. Por
                exemplo, podemos utilizar algoritmos de IA para analisar padrões
                em grandes conjuntos de dados, realizar previsões de demanda e
                desempenho, identificar anomalias em modelos 3D, otimizar
                rotinas de trabalho e personalizar experiências de usuário. Isso
                proporciona uma maior eficiência operacional, melhora a
                qualidade dos resultados e impulsiona a inovação nos projetos da
                BIM START.
            </p>
        </>
    ),
    img: {
        src: aiImg,
        alt: 'Inteligência Artificial'
    }
};

export const bsModelerCardsData = [
    {
        image: '/images/tecnology/bs-modeler/card-1.webp',
        title: 'Automação de Processos',
        shortText:
            'O BS Modeler automatiza grande parte do processo de modelagem, reduzindo significativamente o tempo necessário para criar modelos 3D.',
        aosDelay: '100'
    },
    {
        image: '/images/tecnology/bs-modeler/card-2.webp',
        title: 'Integração de Dados',
        shortText:
            'Permite a integração de dados de diferentes fontes (drones, scanners, sensores) em um único modelo coerente.',
        aosDelay: '200'
    },
    {
        image: '/images/tecnology/bs-modeler/card-3.webp',
        title: 'Análises Avançadas',
        shortText:
            'Facilita análises avançadas e simulações, permitindo prever e mitigar possíveis problemas antes da execução do projeto.',
        aosDelay: '300'
    },
    {
        image: '/images/tecnology/bs-modeler/card-4.webp',
        title: 'Facilidade na Utilização',
        shortText:
            'Projetado para ser intuitivo, o BS Modeler permite que mesmo equipes com menos experiência técnica possam criar e manipular modelos 3D com eficiência.',
        aosDelay: '400'
    }
];


export const equipmentsData = [
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
        aosDelay: '300',
        size: 335
    },
    {
        image: '/images/tecnology/equipments/card-4.png',
        title: 'Câmera Dji Zenmuse P1',
        shortText:
            'Com alta resolução, a câmera DJI Zenmuse P1 é ideal para captura de imagens aéreas em alta definição, essenciais para análises detalhadas.',
        aosDelay: '100',
        size: 333
    },
    {
        image: '/images/tecnology/equipments/card-5.png',
        title: 'Sensor Dji Zenmuse L1',
        shortText:
            'O sensor LiDAR DJI Zenmuse L1 oferece mapeamento preciso de terrenos e estruturas, com capacidade de captura em múltiplas camadas.',
        aosDelay: '200',
        size: 333
    },
    {
        image: '/images/tecnology/equipments/card-6.png',
        title: 'Sensor Dji Zenmuse L2',
        shortText:
            'Com tecnologia multiespectral, o sensor DJI Zenmuse L2 permite análises detalhadas em diferentes espectros, proporcionando insights valiosos.',
        aosDelay: '300',
        size: 360
    },
    {
        image: '/images/tecnology/equipments/card-7.png',
        title: 'Drone Dji Matrice 300',
        shortText:
            'Robusto e confiável, o drone DJI Matrice 200 é a escolha ideal para levantamentos aéreos precisos e eficientes.',
        aosDelay: '100',
        size: 334
    },
    {
        image: '/images/tecnology/equipments/card-8.png',
        title: 'Drone DJI Mavic Pro 2',
        shortText:
            'Portátil e de alta qualidade, o drone DJI Mavic Pro 2 oferece versatilidade e desempenho para captura de imagens e vídeos em diversas situações.',
        aosDelay: '200',
        size: 333
    },
    {
        image: '/images/tecnology/equipments/card-9.png',
        title: 'Ecobatímetro',
        shortText:
            "Equipamento essencial para medição de profundidade em corpos d'água, o ecobatímetro garante dados precisos em levantamentos aquáticos.",
        aosDelay: '300',
        size: 370
    },
    {
        image: '/images/tecnology/equipments/card-10.png',
        title: 'Impressora 3D',
        shortText:
            'Utilizada para fabricação de acessórios personalizados, a impressora 3D contribui para a otimização dos processos de levantamento em campo e personalização de equipamentos.',
        aosDelay: '100',
        size: 400
    }
];