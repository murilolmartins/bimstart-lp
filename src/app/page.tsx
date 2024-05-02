import Services from '@/components/Common/Services';
import Footer from '@/components/Layouts/Footer';
import Navbar from '@/components/Layouts/Navbar';
import Equipments from '@/components/Pages/Home/Equipments';
import HowItWorks from '@/components/Pages/Home/HowItWorks';
import MainBanner from '@/components/Pages/Home/MainBanner';
import ModelTenology from '@/components/Pages/Home/ModelTecnology';
import Partners from '@/components/Pages/Home/Partners';
import RealityCapture from '@/components/Pages/Home/RealityCapture';
import { servicesData1, servicesData2 } from '@/constants/services';
import React from 'react';

export default function Page() {
    return (
        <>
            <Navbar />

            <MainBanner />

            <RealityCapture />

            <HowItWorks />

            <Services servicesData={servicesData1} title="Aplicações" />

            <ModelTenology />

            <Services servicesData={servicesData2} title="Serviços" />

            <Equipments />

            <Partners />

            <Footer />
        </>
    );
}
