"use client"

import React from "react"
import Link from "next/link"
import { ArrowUpRightFromSquare, CalendarIcon, HomeIcon, InboxIcon, MailIcon, MessageCircle, MousePointer, MousePointerClick, PencilIcon, PersonStanding, PlaneIcon, SendIcon, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "../ui/dock"
import { Avatar, Dropdown, Label } from "@heroui/react"
import { useBoundStore } from "@/store/store"
import { logOut } from "@/lib/auth"

export type IconProps = React.HTMLAttributes<SVGElement>

const DATA = {
    navbar: [
        { href: "#", icon: HomeIcon, label: "Inicio" },
        { href: "#", icon: MousePointerClick, label: "Proyectos" },
        { href: "#", icon: MessageCircle, label: "Mensajes" },
        { href: "#", icon: InboxIcon, label: "Notificaciones" },
    ],
}

export function NavDock() {
    const user = useBoundStore((state) => state.user);

    return (
        <div className="flex flex-col items-center justify-center sticky bottom-0 z-50 pb-6">
            <TooltipProvider>
                <Dock direction="middle">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({ variant: "dock", size: "icon" }),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full bg-background/40 dark:bg-primary-foreground/40 mr-1" />
                    <Dropdown>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="p-1">
                                <Dropdown.Trigger className="rounded-full bg-background">
                                    <Avatar size="sm">
                                        <Avatar.Image
                                            alt={user?.username}
                                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                                            />
                                        <Avatar.Fallback delayMs={600}>{user?.username.slice(0, 2).toUpperCase()}</Avatar.Fallback>
                                    </Avatar>
                                </Dropdown.Trigger>
                                            </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Perfil</p>
                            </TooltipContent>
                        </Tooltip>
                        <Dropdown.Popover className="rounded-2xl bg-white/40 backdrop-blur-sm">
                            <div className="px-3 pt-3 pb-1">
                                <div className="flex items-center gap-2">
                                    <Avatar size="sm">
                                        <Avatar.Image
                                            alt={user?.username}
                                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                                        />
                                        <Avatar.Fallback delayMs={600}>{user?.username.slice(0, 2).toUpperCase()}</Avatar.Fallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-0">
                                        <p className="text-sm leading-5 font-medium">{user?.username}</p>
                                        <p className="text-xs leading-none text-foreground/60">{user?.email}</p>
                                    </div>
                                </div>
                            </div>
                            <Dropdown.Menu>
                                <Dropdown.Item id="profile" textValue="Profile" className="rounded-lg hover:bg-foreground/10">
                                    <div className="flex w-full items-center justify-between gap-2">
                                        <Label>Perfil</Label>
                                        <User className="size-3.5 text-foreground/60" />
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item id="settings" textValue="Settings" className="rounded-lg hover:bg-foreground/10">
                                    <div className="flex w-full items-center justify-between gap-2">
                                        <Label>Ajustes</Label>
                                        <Settings className="size-3.5 text-foreground/60" />
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item id="logout" textValue="Logout" variant="danger" className="rounded-lg hover:bg-foreground/10" onClick={logOut}>
                                    <div className="flex w-full items-center justify-between gap-2">
                                        <Label>Cerrar Sesión</Label>
                                        <ArrowUpRightFromSquare className="size-3.5 text-danger" />
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </Dock>
            </TooltipProvider>
        </div>
    )
}
