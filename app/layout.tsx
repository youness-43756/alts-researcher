import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "@/context/searchContext";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

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
      <body className={`${inter.className} bg-[#F6F5F2]`}>
        <div className="max-w-[1440px] mx-auto md:px-6 px-3">
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
