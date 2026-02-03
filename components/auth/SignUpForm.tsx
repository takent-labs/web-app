import { InputGroup, Label, Modal, Separator, TextField } from "@heroui/react";
import { AtSignIcon, EyeClosedIcon, EyeIcon, Layers, User2Icon } from 'lucide-react';
import { Button } from '../ui/button';
import { Apple } from "../ui/svgs/apple";
import { Google } from "../ui/svgs/google";
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";

const signUpSchema = z.object({
    firstName: z.string().min(1, "Campo obligatorio.").max(50, "El nombre debe tener menos de 50 caracteres."),
    lastName: z.string().min(1, "Campo obligatorio.").max(50, "El apellido debe tener menos de 50 caracteres."),
    username: z.string().min(1, "Campo obligatorio.").max(50, "El usuario debe tener menos de 50 caracteres."),
    email: z
        .email({ pattern: z.regexes.email })
        .min(1, "Campo obligatorio."),
    password: z
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres.")
})

export default function SignUpForm({ onSuccess }: { onSuccess: () => void }) {

    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Error al registrar el usuario");
            }

            console.log("Usuario registrado");

            onSuccess();
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitGoogle = async () => {
        // TODO: Implementar el login con Google
    }

    const onSubmitApple = async () => {
        // TODO: Implementar el login con Apple
    }

    return (
        <form id="sign-up-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 px-4 py-2">

            <div className="flex w-full gap-2">
                <Button type="button" onClick={onSubmitGoogle} variant="secondary" size="icon-lg" className="flex-1 h-12">
                    <Google className="text-primary/70" />
                </Button>
                <Button type="button" onClick={onSubmitApple} variant="secondary" size="icon-lg" className="flex-1 h-12">
                    <Apple className="text-primary/70" />
                </Button>
            </div>

            <div className="flex items-center gap-4 ">
                <Separator className="flex-1 bg-primary/10" />
                <span className="text-xs text-primary/40 font-medium uppercase">o</span>
                <Separator className="flex-1 bg-primary/10" />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <TextField className="w-full" name="first_name">
                        <Label className="text-primary/70 mb-1.5 block">Nombre</Label>
                        <InputGroup>
                            <InputGroup.Input
                                {...register("firstName")}
                                className="w-full bg-secondary h-12 px-4 rounded-l-xl"
                                placeholder="Manuel"
                            />
                        </InputGroup>
                        {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
                    </TextField>
                    <TextField className="w-full" name="last_name">
                        <Label className="text-primary/70 mb-1.5 block">Apellidos</Label>
                        <InputGroup>
                            <InputGroup.Input
                                {...register("lastName")}
                                className="w-full bg-secondary h-12 px-4 rounded-l-xl"
                                placeholder="García López"
                            />
                        </InputGroup>
                        {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
                    </TextField>
                </div>

                <TextField className="w-full" name="username">
                    <Label className="text-primary/70 mb-1.5 block">Usuario</Label>
                    <InputGroup>
                        <InputGroup.Input
                            {...register("username")}
                            className="w-full bg-secondary h-12 px-4 rounded-l-xl"
                            placeholder="manuel_234"
                        />
                        <InputGroup.Suffix className="bg-secondary pr-4 rounded-r-xl">
                            <User2Icon className="size-4 text-primary/70 h-12" />
                        </InputGroup.Suffix>
                    </InputGroup>
                    {errors.username && <p className="text-xs text-red-500">{errors.username.message}</p>}
                </TextField>

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
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
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
                    {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                </TextField>
            </div>
        </form>
    )
}
