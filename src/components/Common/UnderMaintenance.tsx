'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/images/bimlogo.webp';

const UnderMaintenance: React.FC = () => {
    return (
        <>
            <div className="coming-soon-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="coming-soon-content">
                                <Link href="/" className="logo">
                                    <Image
                                        src={logo}
                                        alt="image"
                                        width={150}
                                        height={40}
                                    />
                                </Link>

                                <h2>Em Construção</h2>
                                <p className="mt-4">
                                    <b>
                                        Nossa equipe de desenvolvimento está
                                        empenhada em criar a melhor experiência
                                        para você.
                                    </b>
                                </p>
                                <p>
    <b>Aguarde, grandes novidades estão a caminho!</b>
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UnderMaintenance;
