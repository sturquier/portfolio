import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Simon Turquier | %s',
    default: 'Simon Turquier | Home'
  },
  description: "Simon Turquier's website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
