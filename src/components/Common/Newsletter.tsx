'use client';

import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <>
            <div className="newsletter-area">
                <div className="container">
                    <div
                        className="newsletter-inner-area"
                        style={{
                            backgroundImage: `url(/images/blog/banner2.jpg)`
                        }}
                    >
                        <div className="newsletter-content">
                            <h2
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                            >
                               Cadastre-se para receber nossos próximos artigos por email!
                            </h2>

                            <form
                                className="newsletter-form"
                                onSubmit={(e) => e.preventDefault()}
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="400"
                            >
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Insira seu email"
                                    name="email"
                                    required
                                />
                                <button type="submit">Inscrever!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Newsletter;
