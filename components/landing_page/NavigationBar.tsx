"use client"

import Link from 'next/link'
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { Layers } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function NavigationBar() {
    const { openSignIn } = useAuth()

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`
                w-full backdrop-blur-2xl sticky top-0 z-50 
                bg-[#FEF7EE]/50 dark:bg-[#282524]/50 
                transition-shadow duration-300 ease-in-out
                ${isScrolled ? "shadow-xl" : "shadow-none"} 
                shadow-primary/10 dark:shadow-[#161514]/40
            `}
        >
            <nav className="flex items-center max-w-8xl mx-auto p-8 justify-between">
                <a href="/" className="text-2xl font-extrabold flex items-center gap-2">
                    <img
                        src="logo.png"
                        alt="takent logo"
                        className="h-14 w-auto rounded-xl"
                    />
                    Takent.
                </a>

                <div className="flex items-center gap-2">

                    <AnimatedThemeToggler />

                    <Link href="/download">
                        <Button variant="ghost">
                            Descargar app
                        </Button>
                    </Link>

                    <Button variant="default" onClick={openSignIn}>
                        <Layers size={12} strokeWidth={3} className="scale-x-[-1]" />Iniciar Sesión
                    </Button>
                </div>
            </nav>
        </header>
    )
}
