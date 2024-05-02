import '../styles/bootstrap.min.css';
import '../styles/animate.min.css';
import 'animate.css';
import '../styles/all.min.css';
import '../styles/pe-icon-7-stroke.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'swiper/css';
import 'swiper/css/bundle';

// App Showcase Home Style
import '../styles/app-home-page.css';
// Business Consulting Home Page Style
import '../styles/business-consulting-home-page.css';
// About Page Style
import '../styles/about-page.css';

// Global Style
import '../styles/style.css';
import '../styles/responsive.css';
import './globals.css';

import type { Metadata } from 'next';
import { Inter, Saira } from 'next/font/google';
import './globals.css';
import GoTop from '@/components/Layouts/GoTop';
import AosAnimation from '@/components/Layouts/AosAnimation';

// For all body text font
const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

// For all heading font
const saira = Saira({
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
                {children}
                <AosAnimation />
                <GoTop />
            </body>
        </html>
    );
}
