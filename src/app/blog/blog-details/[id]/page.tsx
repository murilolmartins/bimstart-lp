import PageBanner from '@/components/Common/PageBanner';
import BlogDetailsContent from '@/components/Pages/Blog/BlogDetailsContent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'BIM START - Post'
};

export default function Page() {
    return (
        <>
            <PageBanner
                pageTitle="Post"
                BGImage="/images/blog/banner3.webp"
            />

            <BlogDetailsContent />
        </>
    );
}
