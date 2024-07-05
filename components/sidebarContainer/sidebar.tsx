import SidebarLinks from "./sidebarLinks";

export default function Sidebar() {
    return (
        <nav className="bg-white drop-shadow-sm rounded-xl flex md:flex-col flex-row gap-4 md:py-8 md:px-4 p-2">
            <SidebarLinks
                staticClassName="flex items-center gap-4 p-4"
                cls="bg-accent rounded-xl font-medium" />
        </nav>
    )
}