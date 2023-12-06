"use client"
import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import toast, { Toaster } from 'react-hot-toast';

export const Generator = () => {
    const [passLength, setPassLength] = useState(10);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleSliderChange = (value: number) => {
        setPassLength(value);
    };

    const generatePassword = (length: number): string => {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(passLength);
        setGeneratedPassword(newPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPassword);

        toast.success('Successfully Copy !')
    };

    return (
        <>
            <section className='container mx-auto font-mono mt-16'>
            <Toaster />
                <div className='flex w-fit mx-auto'>
                    <div className='w-fit my-5 p-3 flex bg-gray-100 rounded-md rounded-e-none'>
                        <p className='text-2xl'>
                            {generatedPassword ? generatedPassword : "Click the button !"}
                        </p>
                    </div>
                    <div className='p-3 my-auto bg-gray-100 border-l-2 rounded-s-none rounded-e-md'
                         onClick={copyToClipboard}
                    >
                        <Copy size={32} />
                    </div>
                </div>
                <div className='mt-10 gap-10'>
                    <div className='w-2/4 mx-auto'>
                        <h4 className='text-xl'>
                            Password Length : {passLength}
                        </h4>
                        <Slider
                            className='mt-7'
                            defaultValue={[10]}
                            max={50}
                            min={10}
                            step={1}
                            onValueChange={handleSliderChange}
                        />
                    </div>
                    <div className='w-fit mx-auto mt-7'>
                        <button
                            className='bg-gray-100 p-3 rounded-md hover:bg-gray-300 transition-colors text-xl'
                            onClick={handleGeneratePassword}
                        >
                            Generate
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
