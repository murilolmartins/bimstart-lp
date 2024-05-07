import React from 'react';
import '../../public/styles/bootstrap.min.css';
import '../../public/styles/animate.min.css';
import 'animate.css';
import '../../public/styles/all.min.css';
import '../../public/styles/pe-icon-7-stroke.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'swiper/css';
import 'swiper/css/bundle';

// App Showcase Home Style
import '../../public/styles/app-home-page.css';
// Business Consulting Home Page Style
import '../../public/styles/business-consulting-home-page.css';
// About Page Style
import '../../public/styles/about-page.css';
// Tecnology Page Style
import '../../public/styles/tecnology-page.css';

// Global Style
import '../../public/styles/style.css';
import './globals.css';

import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import AosAnimation from '@/components/Layouts/AosAnimation';
import GoTop from '@/components/Layouts/GoTop';
import Navbar from '@/components/Layouts/Navbar';
import Footer from '@/components/Layouts/Footer';

// For all body text font
const inter = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

// For all heading font
const saira = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-saira',
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'BIM START',
    description:
        'BIM START is a leading provider of reality capture and 3D modeling services for a wide range of industries.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.variable} ${saira.variable}`}>
                <Navbar />
                {children}

                <AosAnimation />

                <GoTop />

                <Footer />
            </body>
        </html>
    );
}
