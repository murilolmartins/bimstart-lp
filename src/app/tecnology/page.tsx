import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Equipments from '@/components/Pages/Tecnology/Equipments';
import Setup from '@/components/Pages/Tecnology/Setup';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BIM START - Tecnologia'
};

export default function Page() {
    return (
        <>
            <PageBanner pageTitle="Tecnologia" BGImage="/images/tecnology/banner.webp" />

            <Setup />

            <Equipments />

        </>
    );
}
