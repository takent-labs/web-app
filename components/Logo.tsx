"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Logo() {

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const path = mounted
        ? (resolvedTheme === "dark" ? "/logo/logo_dark.png" : "/logo/logo_light.png")
        : "/logo/logo_light.png";

    return (
        <Link href="/" prefetch={false} className='overflow-hidden'>
            <div className='flex items-center w-52 h-16'>
                <AspectRatio
                    ratio={16 / 9}
                    className="flex items-center justify-center"
                >
                    <Image
                        priority
                        src={path}
                        alt="Logo de la app takent"
                        width={150}
                        height={150}
                    />
                </AspectRatio>
            </div>
        </Link>
    )
}