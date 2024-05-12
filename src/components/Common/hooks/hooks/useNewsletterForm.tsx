'use client';

import { useModalStore } from '@/store/ModalStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup
    .object({
        email: yup
            .string()
            .email('Digite um email válido')
            .required('Digite seu email')
    })
    .required();

type FormData = yup.InferType<typeof schema>;

export const useNewsletterForm = () => {
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
        toast.loading('Inscrevendo-se na newsletter...', {
            position: 'top-center',
            toastId: 'sending-email',
            closeButton: false
        });
        await fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(() => {
                setContent(
                    <div className="newsletter-modal">
                        <h2>Parabéns!</h2>
                        <div className="newsletter-modal-text">
                            <p>
                                Você foi inscrito com sucesso em nossa
                                newsletter.
                            </p>
                            <p>
                                Nossas proximas publicações chegaram diretamente em
                                seu email!
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
