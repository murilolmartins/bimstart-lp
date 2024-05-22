import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Equipments from '@/components/Pages/Tecnology/Equipments';
import { Metadata } from 'next';
import {
    ai,
    bsmodeler,
    cloudBased,
    computerVision,
    realityCapture
} from '@/constants/tecnology';
import BsModelerCards from '@/components/Pages/Tecnology/BSModelerCards';
import GIS from '@/components/Pages/Tecnology/GIS';
import BIM from '@/components/Pages/Tecnology/BIM';
import DescriptionSection from '@/components/Common/DescriptionSection';

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

            <DescriptionSection {...realityCapture} invert />

            <BIM />

            <DescriptionSection {...bsmodeler} />

            <BsModelerCards />

            <DescriptionSection {...computerVision} invert />

            <GIS />

            <DescriptionSection {...cloudBased} invert />

            <DescriptionSection {...ai} blackBg />

            <Equipments />
        </>
    );
}
