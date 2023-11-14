import type { Metadata } from 'next'

import Projects from './page'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsLayout() {
  return <Projects />
}