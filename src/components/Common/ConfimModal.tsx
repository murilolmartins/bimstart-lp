'use client';

import { useModalStore } from '@/store/ModalStore';

export const ConfimModal: React.FC = () => {
    const { isOpen, modalContent } = useModalStore();
    return (
        <>
            {isOpen && (
                <>
                    <div className="modal-overlay"></div>
                    <div className="modal-content">{modalContent}</div>
                </>
            )}
        </>
    );
};
