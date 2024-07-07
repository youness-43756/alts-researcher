import Sidebar from "@/components/sidebarContainer/sidebar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className=" h-full flex md:flex-row flex-col md:gap-6 gap-3">
            <nav className="bg-white drop-shadow-sm rounded-xl flex md:flex-col flex-row gap-3 md:py-8 md:px-4 p-2">
                <Sidebar />
            </nav>
            <div className="grow md:py-8 py-4 md:px-6 px-4 bg-white drop-shadow-sm rounded-xl">
                {children}
            </div>
        </div>
    );
}