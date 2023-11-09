import type { Metadata } from 'next'

import ContactForm from "../components/contact/form"
 
export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl font-bold mb-2">Contact me</h1>
        <p className="mb-6 text-lg text-center text-gray-600">Feel free to fill out the form below</p>
        <ContactForm />
    </main>
  )
}
