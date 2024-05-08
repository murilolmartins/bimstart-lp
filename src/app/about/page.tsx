import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import AboutUs from '../../components/Pages/About/AboutUs';
import Metrics from '../../components/Pages/About/Metrics';
import Mission from '../../components/Pages/About/Mission';
import Values from '../../components/Pages/About/Values';
import TeamMember from '../../components/Pages/About/TeamMember';
import Team from '../../components/Pages/About/Team';
import History from '../../components/Pages/About/History';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BIM START - Sobre'
};

export default function Page() {
    return (
        <>
            <PageBanner
                pageTitle="Sobre Nós"
                BGImage="/images/about/banner/bg.webp"
            />

            <AboutUs />

            <Metrics />

            <Mission />

            <Values />

            <TeamMember />

            <History />

            <Team />
        </>
    );
}
