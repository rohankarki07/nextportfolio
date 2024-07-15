import type { Metadata } from "next";
import { Sahitya } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const inter = Sahitya({ subsets: ["devanagari"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isTopbarPresent = true;

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex-grow md:flex px-6 body-text">
          <Sidebar />
          {isTopbarPresent ? (
            <div className="flex flex-col w-full">
              <Topbar />
              <div className="flex-grow">{children}</div>
            </div>
          ) : (
            children
          )}
        </div>
      </body>
    </html>
  );
}
