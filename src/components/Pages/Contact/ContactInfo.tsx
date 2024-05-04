'use client';

import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <>
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 h-100">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-mail"></i>
                                </div>
                                <h3>Email</h3>
                                <p>
                                    <a
                                        href="mailto:contato@bimstart.com.br?subject="
                                        target="_blank"
                                    >
                                        contato@bimstart.com.br
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Telefone</h3>
                                <p>
                                    <a href="tel:+1234567890" target="_blank">
                                        (41) 999303093
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 h-100">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </div>
                                <h3>Linkedin</h3>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/company/bimstart/"
                                        target="_blank"
                                    >
                                        BIM START
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <h3>Instagram</h3>
                                <p>
                                    <a
                                        href="https://www.instagram.com/bimstart/"
                                        target="_blank"
                                    >
                                        @bimstart
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Endereço</h3>
                                <p>
                                    <a
                                        target="_blank"
                                        href="https://www.google.com/maps/place/BIM+START/@-25.436219,-49.26858,16z/data=!4m6!3m5!1s0x94dce469315aaaab:0x32ebd0595fada9af!8m2!3d-25.4362188!4d-49.2685796!16s%2Fg%2F11frq_b26p?hl=pt-BR&entry=ttu"
                                    >
                                        Av. Visc. de Guarapuava, 2764 - Sala
                                        1508 - Centro, Curitiba - PR, 80010-100
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
