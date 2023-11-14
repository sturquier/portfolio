'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const translations = useTranslations('About')

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl font-bold mb-2">{translations('title')}</h1>
    </main>
  )
}
