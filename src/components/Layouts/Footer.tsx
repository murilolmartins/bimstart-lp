'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="mb-4">
                        <div
                            className="single-footer-widget header-logo"
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}
                        >
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        src={'/images/bimlogo.webp'}
                                        alt="Logo"
                                        width={180}
                                        height={40}
                                    />
                                </Link>
                            </div>

                            <ul className="social-links">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/bimstart/"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/bimstart/"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:contato@bimstart.com.br?subject="
                                        target="_blank"
                                    >
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/@bimstart9538"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                                <Link
                                    href="/contact-us/"
                                    className="btn btn-primary"
                                >
                                    Corporativo
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-sm-6">
                            <div
                                className="single-footer-widget ml-4"
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            >
                                <h3>Paginas</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Sobre</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Serviços</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Tecnologia</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Contato</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div
                                className="single-footer-widget"
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="400"
                            >
                                <h3>Onde Estamos?</h3>

                                <iframe
                                    frameBorder="0"
                                    style={{
                                        border: 0,
                                        width: '100%',
                                        maxWidth: '620px',
                                        height: '350px'
                                    }}
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0613035225037!2d-49.27115452375442!3d-25.436213933139193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce469315aaaab%3A0x32ebd0595fada9af!2sBIM%20START!5e0!3m2!1spt-BR!2sbr!4v1709667890584!5m2!1spt-BR!2sbr"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <p>
                            Copyright © Technologycal | {currentYear} — Designed
                            by
                            <span
                                className="m-lg-1"
                                style={{
                                    color: '#519b00'
                                }}
                            >
                                BIM START
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
