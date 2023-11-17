import type { Metadata } from 'next'

import About from './page'
import './page.scss'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutLayout() {
  return <About />
}