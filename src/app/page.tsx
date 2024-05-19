import React from 'react';
import Services from '@/components/Common/Services';
import Equipments from '@/components/Pages/Home/Equipments';
import HowItWorks from '@/components/Pages/Home/HowItWorks';
import MainBanner from '@/components/Pages/Home/MainBanner';
import ModelTenology from '@/components/Pages/Home/ModelTecnology';
import Partners from '@/components/Pages/Home/Partners';
import RealityCapture from '@/components/Pages/Home/RealityCapture';
import { servicesData1, servicesData2 } from '@/constants/services';
import Feedback from '@/components/Pages/Home/Feedback';
import Introduction from '@/components/Pages/Home/Introduction';

export default function Page() {
    return (
        <>
            <MainBanner />

            <Introduction />
            
            <RealityCapture />

            <HowItWorks />

            <Services
                servicesData={servicesData1}
                title="Aplicações"
                titleMinHeight="60px"
            />

            <ModelTenology />

            <Services
                servicesData={servicesData2}
                title="Serviços"
                titleMinHeight="85px"
            />

            <Equipments />

            <Partners />

            <Feedback />
        </>
    );
}
