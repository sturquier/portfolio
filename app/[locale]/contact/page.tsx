'use client'

import { useTranslations } from 'next-intl'

import ContactForm from '../../components/contact/form'

export default function Contact() {
  const translations = useTranslations('Contact')

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl font-bold mb-2">{translations('title')}</h1>
        <p className="mb-6 text-lg text-center text-gray-600">{translations('subtitle')}</p>
        <ContactForm />
    </main>
  )
}
