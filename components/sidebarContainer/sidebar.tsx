import SidebarLinks from "./sidebarLinks";

export default function Sidebar() {
    return (
        <nav className="bg-white text-primary drop-shadow-sm rounded-xl flex md:flex-col flex-row gap-3 md:py-8 md:px-4 p-2">
            <SidebarLinks
                staticClassName="flex items-center gap-3 p-3 text-base"
                cls="bg-neutral-400/10 rounded-xl font-medium shadow-xs" />
        </nav>
    )
}