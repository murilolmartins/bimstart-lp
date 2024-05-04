import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Newsletter from '../../components/Common/Newsletter';
import ContactInfo from '@/components/Pages/Contact/ContactInfo';
import ContactForm from '@/components/Pages/Contact/ContactForm';

export default function Page() {
    return (
        <>
            <PageBanner
                pageTitle="Contato"
                BGImage="/images/contact/banner.png"
            />

            <ContactInfo />

            <ContactForm />

            <div className="ptb-100">
                <Newsletter />
            </div>
        </>
    );
}
