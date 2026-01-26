"use client";

import { useAuth } from "@/context/AuthContext";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

export default function AuthModals() {
    const { activeModal, closeAll, openSignIn, openSignUp } = useAuth();

    return (
        <>
            <SignInModal
                isOpen={activeModal === "signin"}
                onClose={closeAll}
                onSwitch={openSignUp}
            />
            <SignUpModal
                isOpen={activeModal === "signup"}
                onClose={closeAll}
                onSwitch={openSignIn}
            />
        </>
    );
}
