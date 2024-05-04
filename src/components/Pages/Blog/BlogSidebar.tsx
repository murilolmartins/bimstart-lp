'use client';

import React from 'react';
import Link from 'next/link';
import { blogPostData } from '@/constants/blog';

const BlogSidebar: React.FC = () => {
    return (
        <>
            <div className="widget-area" id="secondary">
                <div className="widget widget_posts_thumb">
                    <h3 className="widget-title">Leia Também</h3>

                    {blogPostData &&
                        blogPostData.map((value, i) => (
                            <article className="item" key={i}>
                                <Link
                                    href={value.readMoreLink}
                                    className="thumb"
                                >
                                    <span
                                        className="fullimage cover bg1"
                                        role="img"
                                        style={{
                                            backgroundImage: `url(${value.image})`
                                        }}
                                    ></span>
                                </Link>
                                <div className="info">
                                    <time>{value.date}</time>
                                    <h4 className="title usmall">
                                        <Link href={value.readMoreLink}>
                                            {value.title}
                                        </Link>
                                    </h4>
                                </div>

                                <div className="clear"></div>
                            </article>
                        ))}
                </div>
            </div>
        </>
    );
};

export default BlogSidebar;
