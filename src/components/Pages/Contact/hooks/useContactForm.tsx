'use client';

import { useModalStore } from '@/store/ModalStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup
    .object({
        name: yup.string().required('Digite seu nome ou o nome da empresa'),
        email: yup
            .string()
            .email('Digite um email válido')
            .required('Digite seu email'),
        number: yup.string().required('Digite seu número de telefone'),
        subject: yup.string().required('Digite o assunto'),
        message: yup.string().required('Digite sua mensagem')
    })
    .required();

type FormData = yup.InferType<typeof schema>;

export const useContactForm = () => {
    const { openModal, setContent, closeModal } = useModalStore();
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const onSubmit = async (formData: FormData) => {
        toast.loading('Enviando mensagem', {
            position: 'top-center',
            toastId: 'sending-email',
            closeButton: false
        });
        await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(() => {
                setContent(
                    <div className="newsletter-modal">
                        <h2>Mensagem Enviada</h2>
                        <div className="newsletter-modal-text">
                            <p>
                                Sua mensagem foi recebida pela nossa equipe e
                                estamos dedicados a fornecer a melhor
                                assistência possível.
                            </p>
                            <p>Agradecemos o contato.</p>
                            <p>
                                <b>Até Breve!</b>
                            </p>
                        </div>

                        <button
                            className="btn btn-primary"
                            onClick={closeModal}
                        >
                            Confirmar
                        </button>
                    </div>
                );

                openModal();
                toast.dismiss('sending-email');

                reset();
            })
            .catch(() => {
                toast.dismiss('sending-email');

                toast.error('Erro ao enviar mensagem', {
                    position: 'top-center'
                });
            });
    };

    const submit = handleSubmit(onSubmit);

    return {
        register,
        errors,
        submit,
        isSubmitting
    };
};
