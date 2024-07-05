import Sidebar from "@/components/sidebarContainer/sidebar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex md:flex-row flex-col md:gap-6 gap-3 h-full">
            <Sidebar />
            <div className="grow md:py-6 py-3 md:px-6 px-3 bg-white drop-shadow-sm rounded-xl">
                {children}
            </div>
        </div>
    );
}