import React from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/Layouts/Footer';
import AboutUs from '@/components/Pages/About/AboutUs';
import Metrics from '@/components/Pages/About/Metrics';
import Mission from '@/components/Pages/About/Mission';
import Values from '@/components/Pages/About/Values';
import TeamMember from '@/components/Pages/About/TeamMember';
import Team from '@/components/Pages/About/Team';
import History from '@/components/Pages/About/History';

export default function Page() {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Sobre Nós"
                BGImage="/images/about/banner/business-team-meeting-boardroom.jpg"
            />

            <AboutUs />

            <Metrics />

            <Mission />

            <Values />

            <TeamMember />

            <History />

            <Team />

            <Footer />
        </>
    );
}
