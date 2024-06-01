import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import ToasterContext from "@/context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P.G.Ryan Portfolio",
  description: "Praveen George Ryan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
