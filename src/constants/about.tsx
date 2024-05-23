interface Metric {
    iconName: string;
    number: string;
    shortText: string;
    aosDelay: string;
}

export const metricsData: Metric[] = [
    {
        iconName: 'fa-solid fa-circle-check',
        number: '5 anos+',
        shortText: 'de Operação',
        aosDelay: '100'
    },
    {
        iconName: 'fa-solid fa-heart',
        number: '120+',
        shortText: 'Clientes Satisfeitos',
        aosDelay: '200'
    },
    {
        iconName: 'fa-solid fa-list-check',
        number: '1 Bilhão+',
        shortText: 'M² Levantados',
        aosDelay: '300'
    }
];
