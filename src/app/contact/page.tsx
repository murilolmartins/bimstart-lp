import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Newsletter from '../../components/Common/Newsletter';
import ContactInfo from '@/components/Pages/Contact/ContactInfo';
import ContactForm from '@/components/Pages/Contact/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BIM START - Contato'
};

export default function Page() {
    return (
        <>
            <PageBanner
                pageTitle="Contato"
                BGImage="/images/contact/banner.webp"
            />

            <ContactInfo />

            <ContactForm />

            <div className="ptb-100">
                <Newsletter />
            </div>
        </>
    );
}
