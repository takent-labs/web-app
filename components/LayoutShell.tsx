'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useMemo } from "react";
import NavigationBar from './landing_page/NavigationBar';
import FooterSection from './FooterSection';

export function LayoutShell({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    const hideLayout = useMemo(() => {
        return ["/sign-in", "/sign-up"].includes(pathname) || pathname.startsWith("/dashboard");
    }, [pathname]);

    return (
        <>
            {!hideLayout && <NavigationBar />}
            {children}
            {!hideLayout && (
                <>
                    <FooterSection />
                </>
            )}
        </>
    );
}