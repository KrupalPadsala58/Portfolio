import type { Metadata } from 'next'
import { Sora, Russo_One } from 'next/font/google'
import './globals.css'
import MagicCursor from '@/components/ui/MagicCursor'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '700']
})

const russo = Russo_One({ 
  subsets: ['latin'],
  variable: '--font-russo',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Aneri Raval – Portfolio',
  description: 'Aneri Raval - Professional Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${russo.variable}`}>
      <body className={sora.className}>
        <MagicCursor />
        {children}
      </body>
    </html>
  )
}
