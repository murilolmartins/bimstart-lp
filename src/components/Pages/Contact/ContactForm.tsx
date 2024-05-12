'use client';

import React from 'react';
import { useContactForm } from './hooks/useContactForm';

const ContactForm: React.FC = () => {
    const { register, submit, errors, isSubmitting } = useContactForm();

    return (
        <>
            <div className="contact-form">
                <div className="contact-title">
                    <h2>Entre em Contato</h2>
                    <p>
                        Preencha seus dados e escreva uma breve mensagem
                        descrevendo suas necessidades, e entraremos em contato o
                        mais breve possível.
                    </p>
                </div>

                <form onSubmit={submit}>
                    <div className="container">
                        <div className="contact-form-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Nome"
                                            className="form-control"
                                            {...register('name')}
                                            name="name"
                                            required
                                            onInvalid={(e) =>
                                                errors.name?.message &&
                                                e.currentTarget.setCustomValidity(
                                                    errors.name.message
                                                )
                                            }
                                            onInput={(e) => {
                                                e.currentTarget.setCustomValidity(
                                                    ''
                                                );
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="form-control"
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
                                                e.currentTarget.setCustomValidity(
                                                    ''
                                                );
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            placeholder="Telefone"
                                            className="form-control"
                                            {...register('number')}
                                            name="number"
                                            required
                                            onInvalid={(e) =>
                                                errors.number?.message &&
                                                e.currentTarget.setCustomValidity(
                                                    errors.number.message
                                                )
                                            }
                                            onInput={(e) => {
                                                e.currentTarget.setCustomValidity(
                                                    ''
                                                );
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Assunto"
                                            className="form-control"
                                            {...register('subject')}
                                            name="subject"
                                            required
                                            onInvalid={(e) =>
                                                errors.subject?.message &&
                                                e.currentTarget.setCustomValidity(
                                                    errors.subject.message
                                                )
                                            }
                                            onInput={(e) => {
                                                e.currentTarget.setCustomValidity(
                                                    ''
                                                );
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            cols={30}
                                            rows={6}
                                            placeholder="Escreva sua mensagem..."
                                            className="form-control"
                                            {...register('message')}
                                            name="message"
                                            required
                                            onInvalid={(e) =>
                                                errors.message?.message &&
                                                e.currentTarget.setCustomValidity(
                                                    errors.message.message
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12">
                                    <button
                                        type="submit"
                                        className={
                                            isSubmitting
                                                ? 'btn btn-primary disabled'
                                                : 'btn btn-primary'
                                        }
                                        disabled={isSubmitting}
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
