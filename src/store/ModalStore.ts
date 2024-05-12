import React from 'react';
import { create } from 'zustand';

interface ModalStore {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    modalContent: React.ReactNode;
    setContent: (content: React.ReactNode) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
    modalContent: null,
    setContent: (content) => set({ modalContent: content })
}));
