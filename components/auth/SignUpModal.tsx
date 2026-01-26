import { Modal } from "@heroui/react";
import { Button } from '../ui/button';
import SignUpForm from "./SignUpForm";

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitch: () => void;
}

export default function SignUpModal({ isOpen, onClose, onSwitch }: SignUpModalProps) {
    return (
        <Modal.Root isOpen={isOpen} onOpenChange={onClose}>
            <Modal.Backdrop variant="blur">
                <Modal.Container size="md">
                    <Modal.Dialog className="bg-background">
                        <Modal.Header className="flex items-center justify-center">
                            <Modal.Heading className="text-center text-2xl font-bold">Registrate</Modal.Heading>
                            <p className="text-center text-sm text-primary/70 font-normal">Introduce tus datos para continuar</p>
                        </Modal.Header>
                        <Modal.Body>
                            <SignUpForm onSuccess={onClose}/>
                        </Modal.Body>
                        <Modal.Footer className="flex flex-col items-center justify-center px-4">
                            <Button className="w-full" type="submit" form="sign-up-form">
                                Crear cuenta
                            </Button>
                            <Button variant="link" size="sm" className="w-full text-sm font-normal text-primary/70" onClick={onSwitch}>
                                ¿Ya tienes una cuenta?
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal.Root>
    )
}
