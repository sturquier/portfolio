import type { Metadata } from 'next'

import Contact from './page'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function ContactLayout() {
  return <Contact />
}