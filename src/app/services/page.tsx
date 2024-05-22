import React from 'react';

import { Metadata } from 'next';
import PageBanner from '@/components/Common/PageBanner';
import BIMModelCards from '@/components/Pages/Services/BimModelCards';
import BathymetricSurvey from '@/components/Pages/Services/BathymetricSurvey';
import AsBuilt from '@/components/Pages/Services/AsBuilt';
import DescriptionSection from '@/components/Common/DescriptionSection';
import { aerialSurvey, documentation, landscaping, topography3d } from '@/constants/services';
import AeroExample from '@/components/Pages/Services/AeroExample';

export const metadata: Metadata = {
    title: 'BIM START - Serviços'
};

export default function Page() {
    return (
        <>
            <PageBanner
                pageTitle="Serviços"
                BGImage="/images/services/banner.webp"
            />

            <BIMModelCards />

            <AsBuilt />

            <DescriptionSection {...topography3d} grayTitle />

            <DescriptionSection {...landscaping} invert grayTitle />

            <DescriptionSection {...documentation} grayTitle />

            <BathymetricSurvey />
            
            <DescriptionSection {...aerialSurvey} blackBg />

            <AeroExample />

        </>
    );
}
