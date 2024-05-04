'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPostData } from '@/constants/blog';

const BlogGrid: React.FC = () => {
    return (
        <>
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        {blogPostData &&
                            blogPostData.map((value, i) => (
                                <div
                                    className="col-lg-4 col-md-6"
                                    key={i}
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay={value.aosDelay}
                                >
                                    <div className="single-blog-item">
                                        <div className="blog-image">
                                            <Link href={value.readMoreLink}>
                                                <Image
                                                    src={value.image}
                                                    alt="image"
                                                    width={510}
                                                    height={383}
                                                />
                                            </Link>

                                            <div className="post-tag">
                                                <Link href={value.readMoreLink}>
                                                    {value.category}
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="blog-post-content">
                                            <span className="date">
                                                {value.date}
                                            </span>
                                            <h3>
                                                <Link href={value.readMoreLink}>
                                                    {value.title}
                                                </Link>
                                            </h3>

                                            <p>{value.shortText}</p>

                                            <Link
                                                href={value.readMoreLink}
                                                className="read-more-btn"
                                            >
                                                Saiba Mais
                                                <i className="fa-solid fa-angles-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogGrid;
