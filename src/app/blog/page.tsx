import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import BlogGrid from '@/components/Pages/Blog/BlogGrid';
import Newsletter from '@/components/Common/Newsletter';

export default function Page() {
    return (
        <>
            <PageBanner pageTitle="Blog" BGImage="/images/blog/banner1.png" />

            <BlogGrid />

            <div className="ptb-100 bg-fcfbfb">
                <Newsletter />
            </div>
        </>
    );
}
