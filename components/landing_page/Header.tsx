"use client"

import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'
import { Button } from '../ui/button'
import { AppWindowMac, CodeIcon, Layers } from 'lucide-react'

export default function Header() {
    return (
        <header
            id="main-header"
            className="w-full backdrop-blur-2xl sticky top-0 z-50 bg-[#FEF7EE]/50 dark:bg-[#282524]/50 transition-shadow duration-300 shadow-primary/10 dark:shadow-[#161514]/40 ease-in-out"
        >
            <nav className="flex items-center max-w-8xl mx-auto p-8 justify-between">
                <a href="/" className="text-2xl font-extrabold flex items-center gap-2">
                    <img
                        // Importar el logo
                        src="logo.png"
                        alt="oskirove logo"
                        className="h-14 w-auto rounded-xl"
                    />
                    Takent.
                </a>
                <div className="flex items-center gap-2">

                    <AnimatedThemeToggler />

                    <a href="/download">
                        <Button variant="secondary">
                            <AppWindowMac size={12} strokeWidth={3} /> Descargar
                        </Button>
                    </a>

                    <a href="/sign-in">
                        <Button variant="default">
                            <Layers size={12} strokeWidth={3} className="scale-x-[-1]" />Iniciar Sesión
                        </Button>
                    </a>
                </div>
            </nav>
        </header>
    )
}
