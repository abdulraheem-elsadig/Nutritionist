import type { Metadata } from "next";

import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/containers/global/footer";
import Navbar from "@/containers/global/navbar";
import { Suspense } from "react";
import Loading from "./loading";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`${urbanist.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
