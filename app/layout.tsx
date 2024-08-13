import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { Footer, Header } from "@/components/shared";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Suraj Shukla",
  description: "I am a Software Engineering Student at Delhi Technological University",
};

// https://www.techwithanirudh.com/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-r from-gray-800 to-black",
          inter.variable
        )}
      > 
        <div className="min-h-screen">
          <Header />
          <div className="mt-16">
            {children}
          </div>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
