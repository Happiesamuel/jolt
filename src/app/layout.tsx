import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: "400",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} 
           flex-col bg-white my-0 mx-auto max-w-[144rem]  min-h-screen antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
