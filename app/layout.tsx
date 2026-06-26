<<<<<<< HEAD
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
=======
import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'
const SocialSidebar = dynamic(() => import('@/components/SocialSidebar'), { ssr: false })

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })

export const metadata: Metadata = {
  title: 'Pranay Wanjari | Web Developer & Designer',
  description: 'Portfolio of Pranay Wanjari — Web Developer and Designer based in Nagpur, India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<body>
  <CustomCursor />
  <SocialSidebar />   {/* ← add this */}
  {children}
</body>
    </html>
  )
}
>>>>>>> 785ecfd11ca841fbba3b9ef3bd57c1b48059610b
