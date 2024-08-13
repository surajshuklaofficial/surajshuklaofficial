import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
