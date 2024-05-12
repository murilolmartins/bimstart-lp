'use client';

import React from 'react';
import { useNewsletterForm } from './hooks/hooks/useNewsletterForm';

const Newsletter: React.FC = () => {
    const { errors, isSubmitting, register, submit } = useNewsletterForm();
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
                                Cadastre-se para receber nossos próximos artigos
                                por email!
                            </h2>

                            <form
                                className="newsletter-form"
                                onSubmit={submit}
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-delay="400"
                            >
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Insira seu email"
                                    {...register('email')}
                                    name="email"
                                    required
                                    onInvalid={(e) =>
                                        errors.email?.message &&
                                        e.currentTarget.setCustomValidity(
                                            errors.email.message
                                        )
                                    }
                                    onInput={(e) => {
                                        e.currentTarget.setCustomValidity('');
                                    }}
                                />
                                <button type="submit" disabled={isSubmitting}>
                                    Inscrever!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Newsletter;
