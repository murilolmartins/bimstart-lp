import PageBanner from '@/components/Common/PageBanner';
import BlogDetailsContent from '@/components/Pages/Blog/BlogDetailsContent';
import React from 'react';

export default function Page() {
    return (
        <>
            <PageBanner
                pageTitle="Post"
                BGImage="/images/blog/banner3.png"
            />

            <BlogDetailsContent />
        </>
    );
}
