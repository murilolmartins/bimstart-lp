'use client';

import React from 'react';
import BlogSidebar from './BlogSidebar';
import Image from 'next/image';

import { useParams } from 'next/navigation';
import { blogPostData } from '@/constants/blog';
import { useRouter } from 'next/navigation';

const BlogDetailsContent: React.FC = () => {
    const { id } = useParams();
    const router = useRouter();

    if (!id || !blogPostData || Array.isArray(id)) {
        router.push('/blog');
        return null;
    }

    const post = blogPostData.find((value) => value.id === Number(id));

    return (
        <>
            <div className="blog-area ptb-100">
                <div className="container">
                    <div
                        className="section-title"
                        style={{
                            textAlign: 'start',
                            margin: 0,
                            maxWidth: '853px'
                        }}
                    >
                        <h2>{post?.title}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details">
                                <div className="article-img">
                                    <Image
                                        src={
                                            blogPostData.find(
                                                (value) =>
                                                    value.id === Number(id)
                                            )?.image || ''
                                        }
                                        alt="image"
                                        width={800}
                                        height={600}
                                    />
                                </div>

                                {blogPostData &&
                                    blogPostData
                                        .filter(
                                            (value) => value.id === Number(id)
                                        )
                                        .map((value, i) => value.content)}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="pl-20">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsContent;
