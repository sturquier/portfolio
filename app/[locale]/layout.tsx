import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import Navbar from "../components/common/navbar"
import Footer from "../components/common/footer"
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Simon Turquier | %s',
    default: 'Simon Turquier | Home'
  },
  description: "Simon Turquier's website",
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' }
  ]
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode,
  params: { locale: string }
}) {
  let messages

  try {
    messages = (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
