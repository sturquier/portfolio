'use client'

import { useTranslations } from 'next-intl'

export default function Home() {
  const translations = useTranslations('Home')

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-2">{translations('title')}</h1>
      <p className="text-xl">{translations('subtitle')}</p>
    </main>
  )
}
