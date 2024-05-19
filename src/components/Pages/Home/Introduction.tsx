'use client';

import React from 'react';

import lineLeft from '../../../../public/images/home/introduction/line-left.png';
import lineRight from '../../../../public/images/home/introduction//line-right.png';
import Image from 'next/image';

const Introduction: React.FC = () => {
    return (
        <>
            <div className="pt-100 pb-100 bg-fcfbfb">
                <div className="container">
                    <div className="introduction-container">
                        <div className="introduction-text">
                            <h2>
                                LEVE O <b>CAMPO</b> PARA DENTRO DO {''}
                                <b>ESCRITÓRIO</b>
                            </h2>
                            <h3>
                                DIGITALIZAÇÃO DE ATIVOS COM PRECISÃO MILIMÉTRICA
                            </h3>
                        </div>
                        <div className='introduction-arrow'>
                            <Image
                                src={lineLeft}
                                alt="Line Left"
                                width={100}
                                height={10}
                            />
                            <Image
                                src={lineRight}
                                alt="Line Right"
                                width={100}
                                height={10}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Introduction;
