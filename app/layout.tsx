import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import dynamic from 'next/dynamic'

const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chandler Patton',
  description: 'A beautiful, modern website built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <MusicPlayer src="/mount kimbie - delta.mp3" />
        </ThemeProvider>
      </body>
    </html>
  )
}
