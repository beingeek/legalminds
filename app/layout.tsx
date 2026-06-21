import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Legal Minds Law Associates | Premier Legal Services',
  description: 'Legal Minds Law Associates - Pakistan\'s leading law firm since 2018. Expert legal services in Family Law, Criminal Law, Corporate Law, Civil Litigation, Property Disputes, and IP. Book your consultation today.',
  keywords: ['law firm', 'legal services', 'lawyer', 'attorney', 'family law', 'criminal law', 'corporate law', 'Pakistan'],
  authors: [{ name: 'Legal Minds Law Associates' }],
  openGraph: {
    title: 'Legal Minds Law Associates | Premier Legal Services',
    description: 'Pakistan\'s leading law firm since 2018. Expert legal counsel with integrity.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1f3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
