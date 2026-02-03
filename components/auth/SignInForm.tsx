import React, { useState } from 'react'

import { InputGroup, Label, Modal, Separator, TextField } from "@heroui/react";
import { AtSignIcon, EyeClosedIcon, EyeIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Apple } from "../ui/svgs/apple";
import { Google } from "../ui/svgs/google";
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation';

const signInSchema = z.object({
    email: z
        .email({ pattern: z.regexes.email })
        .min(1, "El email no puede estar vacío."),
    password: z
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres.")
})

export default function SignInForm({ onSuccess }: { onSuccess: () => void }) {

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof signInSchema>) => {

        //TODO manejar errores específicos y no genéricos
        try {
            const response = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Error al iniciar sesión");
            }

            onSuccess();

            router.refresh();
            router.push("/dashboard/feed")
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitGoogle = () => {
        //Implementar el login con Google
    }

    const onSubmitApple = () => {
        //Implementar el login con Apple
    }

    return (
        <form id="sign-in-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 px-4 py-2">
            <div className="flex w-full gap-2">
                <Button type="button" onClick={onSubmitGoogle} variant="secondary" size="icon-lg" className="flex-1 h-12">
                    <Google className="text-primary/70" />
                </Button>
                <Button type="button" onClick={onSubmitApple} variant="secondary" size="icon-lg" className="flex-1 h-12">
                    <Apple className="text-primary/70" />
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <Separator className="flex-1 bg-primary/10" />
                <span className="text-xs text-primary/40 font-medium uppercase">o</span>
                <Separator className="flex-1 bg-primary/10" />
            </div>

            <div className="flex flex-col gap-4">
                <TextField className="w-full" name="email">
                    <Label className="text-primary/70 mb-1.5 block">Email</Label>
                    <InputGroup>
                        <InputGroup.Input
                            {...register("email")}
                            className="w-full bg-secondary h-12 px-4 rounded-l-xl"
                            placeholder="manuel234@gmail.com"
                        />
                        <InputGroup.Suffix className="bg-secondary pr-4 rounded-r-xl">
                            <AtSignIcon className="size-4 text-primary/70 h-12" />
                        </InputGroup.Suffix>
                    </InputGroup>
                    {errors.email && (
                        <p className="text-xs text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </TextField>

                <TextField className="w-full" name="password">
                    <div className="flex justify-between items-end mb-1.5">
                        <Label className="text-primary/70">Contraseña</Label>
                        <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-xs font-normal text-primary/60 hover:text-primary transition-colors"
                        >
                            ¿Olvidaste tu contraseña?
                        </Button>
                    </div>
                    <InputGroup>
                        <InputGroup.Input
                            {...register("password")}
                            className="w-full bg-secondary h-12 px-4 rounded-l-xl"
                            placeholder="********"
                            type={isVisible ? "text" : "password"}
                        />
                        <InputGroup.Suffix className="bg-secondary pr-4 rounded-r-xl">
                            <button
                                className="hover:cursor-pointer"
                                type="button"
                                aria-label={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <EyeIcon className="size-4 text-primary/70 h-12" /> : <EyeClosedIcon className="size-4 text-primary/70 h-12" />}
                            </button>
                        </InputGroup.Suffix>
                    </InputGroup>
                    {errors.password && (
                        <p className="text-xs text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </TextField>
            </div>
        </form >
    )
}
