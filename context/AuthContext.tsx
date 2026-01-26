"use client";
import React, { createContext, useContext, useState } from "react";

type AuthMode = "signin" | "signup" | null;

interface AuthContextType {
    activeModal: AuthMode;
    openSignIn: () => void;
    openSignUp: () => void;
    closeAll: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeModal, setActiveModal] = useState<AuthMode>(null);

    const openSignIn = () => setActiveModal("signin");
    const openSignUp = () => setActiveModal("signup");
    const closeAll = () => setActiveModal(null);

    return (
        <AuthContext.Provider value={{ activeModal, openSignIn, openSignUp, closeAll }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
};
