import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Equipments from '@/components/Pages/Tecnology/Equipments';
import { Metadata } from 'next';
import TecnologySection from '@/components/Pages/Tecnology/TecnologySection';
import {
    ai,
    bsmodeler,
    cloudBased,
    computerVision,
    realityCapture
} from '@/constants/tecnology';
import BsModelerCards from '@/components/Pages/Tecnology/BSModelerCards';
import GIS from '@/components/Pages/Tecnology/GIS';

export const metadata: Metadata = {
    title: 'BIM START - Tecnologia'
};

export default function Page() {
    return (
        <>
            <PageBanner
                pageTitle="Tecnologia"
                BGImage="/images/tecnology/banner.webp"
            />

            <TecnologySection {...realityCapture} invert />

            <GIS />

            <TecnologySection {...cloudBased} invert />

            <TecnologySection {...ai} black />

            <TecnologySection {...computerVision} gray invert/>

            <TecnologySection {...bsmodeler} />

            <BsModelerCards />

            <Equipments />
        </>
    );
}
