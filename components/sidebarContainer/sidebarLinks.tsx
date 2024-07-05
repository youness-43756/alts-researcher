"use client";
import clsx from "clsx";
import { HomeIcon, PlusIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation";


const links = [
    { label: "Home", href: "/board", icon: <HomeIcon className="w-5 h-5" /> },
    { label: "New research", href: "/board/new-research", icon: <PlusIcon className="w-5 h-5" /> }
]

export default function SidebarLinks({ staticClassName, cls }: {
    staticClassName: string;
    cls: string
}) {
    const pathname = usePathname();
    return (
        <>
            {
                links.map(link => (
                    <Link href={link.href} key={link.label} className={clsx(staticClassName,
                        pathname === link.href && cls
                    )}>
                        {link.icon}
                        <span className="hidden md:inline-flex"> {link.label} </span>
                    </Link>
                ))
            }
        </>
    )
}
