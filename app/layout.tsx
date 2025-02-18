import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Web Developer Portfolio",
  description: "Portfolio showcasing my web development skills and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 min-h-screen`}>
        <div className="relative">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
