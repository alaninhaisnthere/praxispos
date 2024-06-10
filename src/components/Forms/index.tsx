"use client";

import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
    fullName: string;
    tel: string;
    graduate: string;
    contactTime: string;
}

const FormComponent: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            if (data.fullName.length <= 3) {
                alert('Insira o seu nome e sobrenome.');
                return;
            }
            if (data.tel.length <= 10) {
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
                        <label htmlFor="fullName" className="mb-3 block text-xl font-bold tracking-wide text-[#000000] text-left">
                            Nome completo
                        </label>
                        <input
                            type="text"
                            {...register('fullName', { required: true })}
                            id="fullName"
                            placeholder="Insira o seu nome completo"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        />
                        {errors.fullName &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5 w-full max-w-md">
                        <label htmlFor="tel" className="mb-3 block text-xl font-bold tracking-wide text-[#000000]  text-left">
                            Telefone para contato
                        </label>
                        <input
                            type="tel"
                            {...register('tel', { required: true })}
                            id="tel"
                            placeholder="(XX) 12345-6789"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        />
                        {errors.tel &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5 w-full max-w-md">
                        <label htmlFor="graduate" className="mb-3 block text-xl font-bold tracking-wide text-[#000000]  text-left">
                            Sou graduado em:
                        </label>
                        <select
                            {...register('graduate', { required: true })}
                            id="graduate"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="Enfermagem" className="font-bold tracking-wide text-[#000000]">Enfermagem</option>
                            <option value="Farmácia" className="font-bold tracking-wide text-[#000000]">Farmácia</option>
                            <option value="Biomedicina" className="font-bold tracking-wide text-[#000000]">Biomedicina</option>
                        </select>
                        {errors.graduate &&
                            <div className="flex flex-row gap-2">
                                <p className="text-red-900 font-semibold tracking-wider py-1">*</p>
                                <p className="text-[#000000] font-semibold tracking-wider py-1">Este campo é obrigatório.</p>
                            </div>
                        }
                    </div>
                    <div className="mb-5 w-full max-w-md">
                        <label htmlFor="contactTime" className="mb-3 block text-xl font-bold tracking-wide text-[#000000] text-left">
                            Melhor horário para nossa equipe entrar em contato
                        </label>
                        <select
                            {...register('contactTime', { required: true })}
                            id="contactTime"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-sm font-medium text-[#6B7280] outline-none focus:border-[#07074D] focus:shadow-md"
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="Manhã" className="font-bold tracking-wide text-[#000000]">Manhã</option>
                            <option value="Tarde" className="font-bold tracking-wide text-[#000000]">Tarde</option>
                            <option value="Noite" className="font-bold tracking-wide text-[#000000]">Noite</option>
                        </select>
                        {errors.contactTime &&
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

export default FormComponent;
