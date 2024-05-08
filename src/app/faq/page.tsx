import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import FaqContent from '@/components/Pages/Faq/FaqContent';
import CtaArea from '@/components/Common/CtaArea';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BIM START - FAQ'
};

export default function Page() {
    return (
        <>
            <PageBanner pageTitle="FAQ" BGImage="/images/faq/banner.webp" />

            <FaqContent />

            <CtaArea />
        </>
    );
}
