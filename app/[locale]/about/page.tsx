'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const translations = useTranslations('About')

  const experiences: { year: string, company: string, role: string, jobs: string[] }[] = [
    {
      year: '2022 - 2023',
      company: 'TKT Thinking Technology',
      role: 'Lead Web Developer',
      jobs: []
    },
    {
      year: '2019 - 2022',
      company: 'TKT Thinking Technology',
      role: 'Web Developer',
      jobs: []
    },
    {
      year: '2018 - 2019',
      company: 'TKT Thinking Technology',
      role: 'Web Developer ( work-linked training )',
      jobs: []
    },
    {
      year: '2016 - 2018',
      company: 'Au Pas de Courses',
      role: 'Web Developer ( work-linked training )',
      jobs: []
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-6">{translations('title')}</h1>
      <div className="flex flex-col items-start relative">
        <div className="absolute left-28 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-center mb-10">
            <div className="w-24 mr-4 text-gray-600 text-right">{experience.year}</div>
            <div className="relative flex items-center">
              <div className="absolute -left-3 bg-white border-2 border-gray-300 rounded-full w-6 h-6"></div>
            </div>
            <div className="pl-8 text-left">
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              <p>{experience.company}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
