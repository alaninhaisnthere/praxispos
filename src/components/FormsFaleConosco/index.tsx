"use client";

import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
    nome: string;
    whatsapp: string;
    email: string;
    aluno: string;
    motivo: string;
    mensagem: string;
}

const ContatoForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            if (data.nome.length <= 3) {
                alert('Insira o seu nome completo.');
                return;
            }
            if (data.whatsapp.length <= 10) {
                alert('Insira um número de contato válido.');
                return;
            }

            const endpoint = 'https://formspree.io/f/xgegdgwn';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso!');

                // Google Ads
                if (window.gtag) {
                    window.gtag('event', 'conversion', {
                        send_to: 'AW-16557313988/OTj9CKHulLQZEMSfktc9',
                        value: 1.0,
                        currency: 'BRL',
                    });
                }

                // Facebook Pixel
                if (window.fbq) {
                    window.fbq('track', 'Lead');
                }

                reset();
            } else {
                console.error('Failed to send data.');
            }
        } catch (error) {
            console.error('An error occurred while sending the data:', error);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-[#D1AF61] to-[#CBAA5F] rounded-xl p-8 shadow-lg">
            <div className="max-w-md w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
                    <div className="w-full">
                        <label htmlFor="nome" className="mb-3 block text-xl font-bold tracking-wide text-[#000000] text-left">
                            Nome
                        </label>
                        <input
                            type="text"
                            {...register('nome', { required: true })}
                            id="nome"
                            placeholder="Insira o seu nome completo"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        />
                        {errors.nome &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5 w-full max-w-md">
                        <label htmlFor="whatsapp" className="mb-3 block text-xl font-bold tracking-wide text-[#000000]  text-left">
                            Whatsapp
                        </label>
                        <input
                            type="tel"
                            {...register('whatsapp', { required: true })}
                            id="whatsapp"
                            placeholder="(XX) 12345-6789"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        />
                        {errors.whatsapp &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5 w-full max-w-md">
                        <label htmlFor="email" className="mb-3 block text-xl font-bold tracking-wide text-[#000000] text-left">
                            E-mail
                        </label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            id="email"
                            placeholder="Insira o seu e-mail"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        />
                        {errors.email &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5 w-full max-w-md">
                        <label htmlFor="aluno" className="mb-3 block text-xl font-bold tracking-wide text-[#000000] text-left">
                            Você é aluno?
                        </label>
                        <select
                            {...register('aluno', { required: true })}
                            id="aluno"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="sim" className="font-bold tracking-wide text-[#000000]">Sim</option>
                            <option value="nao" className="font-bold tracking-wide text-[#000000]">Não</option>
                        </select>
                        {errors.aluno &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5 w-full max-w-md">
                        <label htmlFor="motivo" className="mb-3 block text-xl font-bold tracking-wide text-[#000000] text-left">
                            Motivo do contato
                        </label>
                        <select
                            {...register('motivo', { required: true })}
                            id="motivo"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="sugestao" className="font-bold tracking-wide text-[#000000]">Sugestão</option>
                            <option value="reclamacao" className="font-bold tracking-wide text-[#000000]">Reclamação</option>
                            <option value="elogio" className="font-bold tracking-wide text-[#000000]">Elogio</option>
                        </select>
                        {errors.motivo &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5 w-full max-w-md">
                        <label htmlFor="mensagem" className="mb-3 block text-xl font-bold tracking-wide text-[#000000] text-left">
                            Mensagem
                        </label>
                        <textarea
                            {...register('mensagem', { required: true })}
                            id="mensagem"
                            placeholder="Digite sua mensagem"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        ></textarea>
                        {errors.mensagem &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <button type="submit" className="rounded-md bg-[#134169] py-3 px-20 text-base font-semibold tracking-wide text-white outline-none shadow-xl transform transition duration-300 hover:scale-105">
                        Enviar mensagem
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContatoForm;