import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import FaqContent from '@/components/Pages/Faq/FaqContent';
import CtaArea from '@/components/Common/CtaArea';

export default function Page() {
    return (
        <>
            <PageBanner pageTitle="FAQ" BGImage="/images/faq/banner.png" />

            <FaqContent />

            <CtaArea />
        </>
    );
}
