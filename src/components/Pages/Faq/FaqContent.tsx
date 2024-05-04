'use client';

import { faqData } from '@/constants/faq';
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';

const FaqContent: React.FC = () => {
    return (
        <>
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Perguntas Frequentes</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="faq-accordion">
                                <Accordion
                                    allowZeroExpanded
                                    preExpanded={['a']}
                                >
                                    {faqData &&
                                        faqData.map((value, i) => (
                                            <AccordionItem
                                                uuid={i}
                                                key={value.title}
                                            >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        {value.title}
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>{value.description}</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqContent;
