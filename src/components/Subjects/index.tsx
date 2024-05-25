"use client";

import React from "react";

import { Accordion, AccordionItem, Divider } from "@nextui-org/react";

export default function Subjects() {
    return (
        <>
            <Accordion
                selectionMode="multiple"
                variant="light"
                showDivider={true}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                                height: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    duration: 1,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 1,
                                },
                            },
                        },
                        exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                                height: {
                                    easings: "ease",
                                    duration: 0.25,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 0.3,
                                },
                            },
                        },
                    },
                }}
            >
                <AccordionItem
                    key="1"
                    aria-label="Confira as matérias"
                    title="MATRIZ CURRICULAR"
                    classNames={{
                        base: "",
                        title: "font-bold text-2xl tracking-wide",
                        content: "font-medium text-lg leading-relaxed",
                    }}
                >
                    <ul className="text-xl">
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Anátomo - Fisiologia do Sistema Tegumentar, Veno-Linfático e Metabolismo
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Disfunções Estéticas Faciais, Corporais e Drenagem Linfática e Saúde Estética
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Cosmetofarmacologia e Prescrição Aplicada a Disfunções Estéticas
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Marketing Digital e Empreendedorismo na Estética
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Avaliação, Anamnese e Exame Físico Aplicado à Estética
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Peelings Estéticos Avançados e Despigmentantes
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Toxina Botulínica e Mesobotox
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Práticas Integrativas na Estética
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Mesoterapia Estética e Procedimento Estético Injetável em Microvasos (PEIM)
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Microagulhamento e Ozonioterapia
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Legislação Sanitária, Biossegurança, Primeiros Socorros e Intercorrências na Estética
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Nutracêuticos e Prescrição na Estética
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Eletroestética I
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Análise de Exames Laboratoriais Associados à Estética
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Acupuntura Aplicada à Estética
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Tricologia e Terapias Capilares
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            PRP e PRF
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Eletroestética II
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Preenchimento Dérmico Facial
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Fios de Sustentação e Bioestimuladores na Harmonização Facial e Corporal
                        </li>
                        <li className="py-2 font-medium text-lg">
                            <span className="inline-block w-2 h-2 mr-2 bg-primary rounded-full align-middle"></span>
                            Atividades Científicas Complementares
                        </li>
                    </ul>
                </AccordionItem>
            </Accordion>
            <Divider orientation="horizontal" style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }} />
        </>
    );
}