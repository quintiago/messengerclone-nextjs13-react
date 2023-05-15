'use client';

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type variant = 'INICIAR SESIÓN' | 'REGÍSTRATE';

const AuthForm = () => {
    const [variant, setVariant] = useState<variant>('INICIAR SESIÓN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'INICIAR SESIÓN') {
            setVariant('REGÍSTRATE');
        } else {
            setVariant('INICIAR SESIÓN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGÍSTRATE') {

        }

        if (variant === 'INICIAR SESIÓN') {

        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10"></div>
        </div>
    );
}

export default AuthForm;