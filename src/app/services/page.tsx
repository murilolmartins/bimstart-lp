import React from 'react';

import { Metadata } from 'next';
import PageBanner from '@/components/Common/PageBanner';
import BIMModelCards from '@/components/Pages/Services/BimModelCards';
import BathymetricSurvey from '@/components/Pages/Services/BathymetricSurvey';

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
            
            <BathymetricSurvey />
        </>
    );
}
