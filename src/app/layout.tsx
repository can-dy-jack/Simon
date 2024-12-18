import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import { UpdateProvider } from "@/context/update";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simon, social media app",
  description: "A social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UpdateProvider>
      <ClerkProvider>
        <html lang="zh-CN">
          {/*  className={inter.className} */}
          <body>
            <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              <NavBar />
            </div>
            <div className="h-[calc(100vh-80px)] overflow-auto bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-4">
              {children}
            </div>
          </body>
        </html>
      </ClerkProvider>
    </UpdateProvider>
  );
}
