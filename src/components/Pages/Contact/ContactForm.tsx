'use client';

import React, { useState } from 'react';

interface FormState {
    name: string;
    email: string;
    number: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Reset form data after submission if needed
        setFormData({
            name: '',
            email: '',
            number: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <div className="contact-form">
                <div className="contact-title">
                    <h2>Entre em Contato</h2>
                    <p>
                        Preencha seus dados e escreva uma breve mensagem descrevendo
                        suas necessidades, e entraremos em contato o mais breve
                        possível.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="contact-form-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="number"
                                            placeholder="Telefone"
                                            className="form-control"
                                            value={formData.number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Assunto"
                                            className="form-control"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            cols={30}
                                            rows={6}
                                            placeholder="Escreva sua mensagem..."
                                            className="form-control"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
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
