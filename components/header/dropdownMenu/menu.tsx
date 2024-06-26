"use client"
import { MenuIcon, Plus, Home } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

const dropdownMenuLinks = [
    { label: "Home", href: "/", icon: <Home className="mr-2 h-4 w-4" /> },
    { label: "New research", href: "/new-research", icon: <Plus className="mr-2 h-4 w-4" /> }
];

export default function MenuPage() {
    const pathname = usePathname();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MenuIcon size={32} color='white' className='cursor-pointer' />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="md:w-56 w-44 md:ml-20 ml-10 space-y-2">
                {
                    dropdownMenuLinks.map(link => (

                        <Link href={link.href} key={link.label}>
                            <DropdownMenuItem className={clsx('cursor-pointer', pathname === link.href && "bg-accent")}>
                                {link.icon}
                                <span>{link.label}</span>
                            </DropdownMenuItem>
                        </Link>

                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
