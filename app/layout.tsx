import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Lora } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Beatles Pub Yerevan',
    template: 'Beatles Pub Yerevan %s',
  },
  description:
    'The oldest pub in Yerevan. 300+ whiskeys, 20+ draught beers, classic British pub food, live rock concerts and pure Beatles vibes. 60 Pushkin St., Yerevan, Armenia.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1e1712',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${oswald.variable} ${lora.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
