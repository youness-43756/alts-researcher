import "./globals.css";
import type { Metadata } from "next";
import { SearchProvider } from "@/context/searchContext";
import { poppins } from "@/lib/font/font";

export const metadata: Metadata = {
  title: "Alts researcher",
  description: "--",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#F6F5F2]`}>
        <div className="max-w-[1440px] mx-auto md:px-8 px-4">
          <SearchProvider>
            <div className="md:py-4 py-3 max-h-screen h-screen">
              {children}
            </div>
          </SearchProvider>
        </div>
      </body>
    </html>
  );
}
