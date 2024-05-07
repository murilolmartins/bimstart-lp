import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Equipments from '@/components/Pages/Tecnology/Equipments';
import Setup from '@/components/Pages/Tecnology/Setup';

export default function Page() {
    return (
        <>
            <PageBanner pageTitle="Tecnologia" BGImage="/images/tecnology/banner.png" />

            <Setup />

            <Equipments />

        </>
    );
}
