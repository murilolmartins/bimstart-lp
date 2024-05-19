import { StaticImageData } from "next/image";

import renanKallasImage from '../../public/images/home/feedback/renankallas.png';


interface FeedbackItem {
    name: string;
    designation: string;
    feedbacskText: string;
    image: StaticImageData;
}

export const feedbacskData: FeedbackItem[] = [
    {
        name: 'Renan Galvão Silva',
        designation: 'Coordenador de Inovação do Grupo Kallas',
        feedbacskText:
            'A BIM START não apenas oferece um serviço de captura de realidade com laser scan excepcional, mas também nos proporciona ferramentas poderosas para antecipar decisões com relatórios incríveis, incluindo verificações de interferências com o que ainda será construído. Desde 2019, sua metodologia de trabalho resultou em ganhos inestimáveis para os mais de 200.000 m2 escaneados. Sua contribuição é fundamental para o sucesso dos nossos projetos e a inovação do Grupo Kallas.',
        image: renanKallasImage
    }
];

export const partnersData = [
    {
        image: '/images/home/partners/Auren.png'
    },
    {
        image: '/images/home/partners/Bosch.png'
    },
    {
        image: '/images/home/partners/BRK-Ambiental.png'
    },
    {
        image: '/images/home/partners/CER-Energia.png'
    },
    {
        image: '/images/home/partners/CESP.png'
    },
    {
        image: '/images/home/partners/Crasa.png'
    },
    {
        image: '/images/home/partners/CTG-Brasil.png'
    },
    {
        image: '/images/home/partners/Eletrobras.png'
    },
    {
        image: '/images/home/partners/Engemon.png'
    },
    {
        image: '/images/home/partners/Engie.png'
    },
    {
        image: '/images/home/partners/Exercito-Brasileiro.png'
    },
    {
        image: '/images/home/partners/G5-Engenharia.png'
    },
    {
        image: '/images/home/partners/Geplan.png'
    },
    {
        image: '/images/home/partners/Grupo-Kallas.png'
    },
    {
        image: '/images/home/partners/GT-Building.png'
    },
    {
        image: '/images/home/partners/Head-5.png'
    },
    {
        image: '/images/home/partners/Inter-Techne.png'
    },
    {
        image: '/images/home/partners/IPPER-Solar.png'
    },
    {
        image: '/images/home/partners/Itaipu-Binacional.png'
    },
    {
        image: '/images/home/partners/Kingspan.png'
    },
    {
        image: '/images/home/partners/Laguna.png'
    },
    {
        image: '/images/home/partners/Luiz-Volpato-Arq.png'
    },
    {
        image: '/images/home/partners/Maia-Melo.png'
    },
    {
        image: '/images/home/partners/Medabil.png'
    },
    {
        image: '/images/home/partners/MEP.png'
    },
    {
        image: '/images/home/partners/Nova-Engevix.png'
    },
    {
        image: '/images/home/partners/PEPSICO.png'
    },
    {
        image: '/images/home/partners/Piemonte.png'
    },
    {
        image: '/images/home/partners/Plaenge.png'
    },
    {
        image: '/images/home/partners/Positivo.png'
    },
    {
        image: '/images/home/partners/RAC.png'
    },
    {
        image: '/images/home/partners/Ricardo-Amaral.png'
    },
    {
        image: '/images/home/partners/San-Remo.png'
    },
    {
        image: '/images/home/partners/Scala.png'
    },
    {
        image: '/images/home/partners/Vale.png'
    },
    {
        image: '/images/home/partners/VLB-Engenharia.png'
    }
];

export const howItWorksData = [
    {
        image: '/images/home/how-it-works/card-1.png',
        title: 'Levantamento em campo',
        shortText:
            'Escaneamento com equipamentos laser para captura de detalhes tridimensionais do ambiente físico.',
        viewDetails: '/services/service-details/',
        aosDelay: '100'
    },
    {
        image: '/images/home/how-it-works/card-3.png',
        title: 'Processamento de dados',
        shortText:
            'Integração dos dados coletados em campo em um conjunto coeso e alinhado, com remoção de ruídos ou interferencias visuais.',
        viewDetails: '/services/service-details/',
        aosDelay: '200'
    },
    {
        image: '/images/home/how-it-works/card-2.png',
        title: 'Projetos',
        shortText:
            'Representações virtuais fiéis do ambiente real, que podem ser usadas para análises avançadas, simulações, verificações e tomada de decisões.',
        viewDetails: '/services/service-details/',
        aosDelay: '300'
    }
];