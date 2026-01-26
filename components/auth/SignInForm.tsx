import React from 'react'

import { InputGroup, Label, Modal, Separator, TextField } from "@heroui/react";
import { AtSignIcon, EyeClosedIcon, Layers } from 'lucide-react';
import { Button } from '../ui/button';
import { Apple } from "../ui/svgs/apple";
import { Google } from "../ui/svgs/google";

export default function SignInForm() {
    return (
        <form action="" className="flex flex-col gap-4 px-6 py-2">
            <div className="flex w-full gap-2">
                <Button variant="secondary" size="icon-lg" className="flex-1 h-12">
                    <Google className="text-primary/70" />
                </Button>
                <Button variant="secondary" size="icon-lg" className="flex-1 h-12">
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
                            className="w-full bg-secondary h-12 px-4 rounded-l-xl"
                            placeholder="jhondoe@gmail.com"
                        />
                        <InputGroup.Suffix className="bg-secondary pr-4 rounded-r-xl">
                            <AtSignIcon className="size-4 text-primary/70 h-12" />
                        </InputGroup.Suffix>
                    </InputGroup>
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
                            className="w-full bg-secondary h-12 px-4 rounded-l-xl"
                            placeholder="********"
                            type="password"
                        />
                        <InputGroup.Suffix className="bg-secondary pr-4 rounded-r-xl">
                            <EyeClosedIcon className="size-4 text-primary/70 h-12" />
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
            </div>
        </form>
    )
}
