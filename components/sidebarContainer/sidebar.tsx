import SidebarLinks from "./sidebarLinks";

export default function Sidebar() {
    return (
        <>
            <SidebarLinks
                staticClassName="flex items-center gap-2 p-3 text-base font-normal"
                cls="bg-neutral-500/10 rounded-xl font-medium shadow-xs" />
        </>
    )
}