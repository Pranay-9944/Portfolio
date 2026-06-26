import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Pranay Wanjari | Web Developer & Designer",
  description: "Portfolio of Pranay Wanjari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}