import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Lora } from 'next/font/google'
import '../globals.css'

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

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} className={`bg-background ${oswald.variable} ${lora.variable}`}>
      <body className="antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
