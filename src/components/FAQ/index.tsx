"use client";

import React from "react";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";

export default function FAQ() {
    return (
        <Accordion
            selectionMode="multiple"
            variant="light"
            showDivider={true}
            defaultExpandedKeys={["1"]}
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
                aria-label="Perguntas frequentes"
                title="Perguntas frequentes"
                classNames={{
                    base: "text-4xl font-normal tracking-wide",
                    title: "font-bold",
                    content: "",
                }}
            >
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Quais são os pré-requisitos para a inscrição?</h1>
                    <p className="text-lg">
                        Para se inscrever na Pós Graduação Lato Sensu em Estética Avançada do Instituto Práxis, é necessário ter graduação completa em Enfermagem, Biomedicina ou Farmácia.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Como são distribuídas as horas de teoria e prática?</h1>
                    <p className="text-lg">
                        O curso possui um total de 500 horas, sendo 365 horas dedicadas à teoria e 135 horas à prática. As aulas teóricas fornecem uma base sólida de conhecimento, enquanto as aulas práticas permitem aplicar as técnicas aprendidas em situações reais.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Qual é a localização dos módulos presenciais?</h1>
                    <p className="text-lg">
                        Os módulos presenciais ocorrem uma vez por mês na cidade de Curitiba, no bairro Portão, dentro da Gran Universidade. A localização é de fácil acesso e oferece uma infraestrutura moderna e completa para o aprendizado.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Os professores são atuantes no mercado?</h1>
                    <p className="text-lg">
                        Sim, todos os nossos professores são profissionais experientes e atuantes no mercado da estética. Eles trazem para a sala de aula casos reais e atualizados, proporcionando um aprendizado prático e conectado com as tendências atuais.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Quais técnicas modernas são ensinadas no curso?</h1>
                    <p className="text-lg">
                        O curso aborda diversas técnicas que são tendências no mercado da estética em 2024, incluindo bioestimuladores, ozonioterapia, e harmonia facial. Além disso, há aulas de biossegurança e empreendedorismo para preparar os alunos para uma carreira de sucesso.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Como funcionam os descontos e o programa de incentivo?</h1>
                    <p className="text-lg">
                        Nós queremos você estudando na Práxis, por isso oferecemos diversos programas de incentivo, desde desconto na matrícula até isenção total de mensalidade por indicações cumulativas de amigos. Por isso, não deixe de preencher o formulário para conversar com a nossa equipe de Consultores.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">O curso é certificado e reconhecido pelo MEC?</h1>
                    <p className="text-lg">
                        Sim, o certificado da Pós Graduação Lato Sensu em Estética Avançada do Instituto Práxis é reconhecido pelo MEC, garantindo credibilidade no mercado de trabalho. Você receberá o mesmo após a finalização dos seus estudos.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Como é o atendimento aos alunos?</h1>
                    <p className="text-lg">
                        Valorizamos um atendimento totalmente personalizado, com turmas limitadas para garantir uma experiência educacional de alta qualidade. Estamos comprometidos em fornecer suporte contínuo aos nossos alunos, desde o momento da inscrição até a conclusão do curso.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Qual é a estrutura do curso?</h1>
                    <p className="text-lg">
                        O curso é composto por 21 módulos abrangendo os tópicos mais relevantes e atuais da estética avançada. São 15 módulos presenciais, realizados um final de semana por mês, oferecendo flexibilidade para conciliar os estudos com outras atividades profissionais.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Há flexibilidade nos encontros presenciais?</h1>
                    <p className="text-lg">
                        Sim, os encontros presenciais são realizados apenas uma vez por mês, permitindo que você concilie seus estudos com suas atividades profissionais e pessoais. A flexibilidade é uma de nossas prioridades para garantir que todos possam participar sem comprometer suas outras responsabilidades.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
                <div className="py-5">
                    <h1 className="text-xl font-semibold">Quais são os benefícios exclusivos para os primeiros inscritos?</h1>
                    <p className="text-lg">
                        Além dos descontos especiais na matrícula, os primeiros inscritos têm acesso a um canal com conteúdos exclusivos para que possam entrar no clima da pós-graduação enquanto aguardam o início das aulas. Também participam do programa de incentivo, onde indicar um amigo pode resultar em descontos cumulativos significativos.
                    </p>
                </div>
                <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "2px", backgroundColor: "#9A792D" }}
                />
            </AccordionItem>
        </Accordion>
    );
}
