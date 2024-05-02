'use client';

import React from 'react';
import Image from 'next/image';

const teamMemberData = [
    {
        image: '/images/about/team-member/team-1.png',
        name: 'Eduardo Pasini Corrêa de Oliveira',
        designation: 'CEO',
        aosDelay: '100',

        socialLinks: [
            {
                iconName: 'fab fa-facebook-f',
                link: 'https://www.facebook.com/'
            },
            {
                iconName: 'fab fa-instagram',
                link: 'https://www.instagram.com/'
            },
            {
                iconName: 'fab fa-twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        image: '/images/about/team-member/team-2.png',
        name: 'Sérgio Kubrusly Fernandes Filho',
        designation: 'CFO/CGO',
        aosDelay: '200',

        socialLinks: [
            {
                iconName: 'fab fa-facebook-f',
                link: 'https://www.facebook.com/'
            },
            {
                iconName: 'fab fa-instagram',
                link: 'https://www.instagram.com/'
            },
            {
                iconName: 'fab fa-twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        image: '/images/about/team-member/team-3.png',
        name: 'Diogo Teixeira Araújo',
        designation: 'CTO',
        aosDelay: '300',

        socialLinks: [
            {
                iconName: 'fab fa-facebook-f',
                link: 'https://www.facebook.com/'
            },
            {
                iconName: 'fab fa-instagram',
                link: 'https://www.instagram.com/'
            },
            {
                iconName: 'fab fa-twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    }
];

const TeamMember: React.FC = () => {
    return (
        <>
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Os Fundadores</h2>
                        <p>
                            Os fundadores da BIM Start são especialistas na
                            criação de projetos de engenharia de alto padrão.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        {teamMemberData &&
                            teamMemberData.slice(0, 3).map((value, i) => (
                                <div
                                    className="col-lg-4 col-md-6 col-sm-6"
                                    key={i}
                                >
                                    <div
                                        className="dm-team-member"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={value.aosDelay}
                                    >
                                        <Image
                                            src={value.image}
                                            alt="image"
                                            width={500}
                                            height={526}
                                        />

                                        <div className="content">
                                            <h3>{value.name}</h3>
                                            <span>{value.designation}</span>

                                            <ul className="social">
                                                {value.socialLinks.map(
                                                    (value, i) => (
                                                        <li key={i}>
                                                            <a
                                                                href={
                                                                    value.link
                                                                }
                                                                target="_blank"
                                                            >
                                                                <i
                                                                    className={
                                                                        value.iconName
                                                                    }
                                                                ></i>
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
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

export default TeamMember;
