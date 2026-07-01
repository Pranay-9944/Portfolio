import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import Chatbot from "@/components/Chatbot";

const SocialSidebar = dynamic(() => import("@/components/SocialSidebar"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Pranay Wanjari | Web Developer & Designer",
  description:
    "Portfolio of Pranay Wanjari — Web Developer and Designer based in Nagpur, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <SocialSidebar />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}