import { Button } from "@/components/ui/button";
import { InstagramIcon } from "./ui/animated-icons/instagram";
import { GithubIcon } from "./ui/animated-icons/github";
import { LinkedinIcon } from "./ui/animated-icons/linkedin";

const socials = [
    {
        id: 1,
        name: "Instagram",
        href: "https://instagram.com/oski_rv",
        icon: InstagramIcon,
    },
    {
        id: 2,
        name: "Github",
        href: "https://github.com/oskirove",
        icon: GithubIcon,
    },
    {
        id: 3,
        name: "Linkedin",
        href: "https://www.linkedin.com/in/%C3%B3scar-rodr%C3%ADguez-3b6aa136a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        icon: LinkedinIcon,
    },
];

export default function FooterSection() {
    return (

        <footer className="flex flex-col space-y-6 bottom-0">
            <div className="flex items-center justify-center gap-4">
                {
                    socials.map((social) => (
                        <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="secondary"
                                size="icon-lg"
                                aria-label={social.name}
                            >
                                <social.icon size={20} className="text-primary/60 stroke-width-2" />
                            </Button>
                        </a>
                    ))
                }
            </div>
            <div className="hidden z-10 sm:relative sm:block overflow-hidden h-[220px]">
                <div
                    className="absolute inset-x-0 bottom-[-4rem] text-center font-extrabold leading-none select-none bg-gradient-to-b from-primary/10 to-transparent text-transparent bg-clip-text transform -translate-y-[6%]"
                    style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
                >
                    takent
                </div>
            </div>
        </footer>
    )
}
