import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'
const SocialSidebar = dynamic(() => import('@/components/SocialSidebar'), { ssr: false })

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })

export const metadata: Metadata = {
  title: 'Your Name | Web Developer & Designer',
  description: 'Portfolio of a creative web developer and designer',
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
