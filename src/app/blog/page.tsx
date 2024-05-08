import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import BlogGrid from '@/components/Pages/Blog/BlogGrid';
import Newsletter from '@/components/Common/Newsletter';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BIM START - Blog'
};

export default function Page() {
    return (
        <>
            <PageBanner pageTitle="Blog" BGImage="/images/blog/banner1.webp" />

            <BlogGrid />

            <div className="ptb-100 bg-fcfbfb">
                <Newsletter />
            </div>
        </>
    );
}
