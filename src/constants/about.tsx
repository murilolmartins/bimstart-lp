interface Metric {
    iconName: string;
    number: string;
    shortText: string;
    aosDelay: string;
}

export const metricsData: Metric[] = [
    {
        iconName: 'fa-solid fa-circle-check',
        number: '5 anos',
        shortText: 'Em operação',
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
        number: '100k+',
        shortText: 'M² Levantados',
        aosDelay: '300'
    },
    {
        iconName: 'fa-solid fa-trophy',
        number: '1.2m+',
        shortText: 'Seguidores',
        aosDelay: '400'
    }
];
