import Sidebar from "@/components/sidebarContainer/sidebar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex md:flex-row flex-col md:gap-6 gap-4 h-full">
            <Sidebar />
            <div className="grow md:py-8 py-4 md:px-6 px-3 bg-white drop-shadow-sm rounded-xl">
                {children}
            </div>
        </div>
    );
}