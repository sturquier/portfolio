'use client'

import { useTranslations } from 'next-intl'

interface IExperience {
  year: string
  company: ICompany
  role: string
  jobs: IJob[]
}

interface ICompany {
  title: string
  description?: string
}

interface IJob {
  description: string
  technology?: string
}

export default function About() {
  const translations = useTranslations('About')

  const experiences: IExperience[] = [
    {
      year: '2022 - 2023',
      company: {
        title: 'TKT Thinking Technology',
        description: translations('companies.tkt.description')
      },
      role: translations('roles.lead'),
      jobs: [
        {
          description: translations('companies.tkt.jobs.development'),
          technology: "Symfony 6, React.JS, Flutter"
        },
        {
          description: translations('companies.tkt.jobs.supervision')
        },
        {
          description: translations('companies.tkt.jobs.estimation')
        },
        {
          description: translations('companies.tkt.jobs.trainerMore')
        },
        {
          description: translations('companies.tkt.jobs.tutor')
        },
      ]
    },
    {
      year: '2019 - 2022',
      company: {
        title: 'TKT Thinking Technology'
      },
      role: translations('roles.fullstack'),
      jobs: [
        {
          description: translations('companies.tkt.jobs.development'),
          technology: 'Symfony 4,5,6, React.JS, Nest.JS'
        },
        {
          description: translations('companies.tkt.jobs.trainer')
        },
      ]
    },
    {
      year: '2018 - 2019',
      company: {
        title: 'TKT Thinking Technology'
      },
      role: translations('roles.training'),
      jobs: [
        {
          description: translations('companies.tkt.jobs.development'),
          technology: 'Symfony 4, React.JS, React Native'
        }
      ]
    },
    {
      year: '2016 - 2018',
      company: {
        title: 'Au Pas de Courses',
        description: translations('companies.apdc.description')
      },
      role: translations('roles.training'),
      jobs: [
        {
          description: translations('companies.apdc.jobs.website'),
          technology: 'Magento 1'
        },
        {
          description: translations('companies.apdc.jobs.bo'),
          technology: 'Symfony 3'
        },
        {
          description: translations('companies.apdc.jobs.application'),
          technology: 'React.JS'
        }
      ]
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-12">{translations('title')}</h1>
      <div className="flex flex-col items-start relative">
        <div className="absolute left-28 top-0 bottom-0 w-0.5 bg-cyan-700"></div>
        {experiences.map((experience: IExperience, index: number) => (
          <div key={index} className="flex items-start mb-10">
            <div className="w-24 mr-4 text-cyan-700 text-right">{experience.year}</div>
            <div className="relative flex items-center">
              <div className="absolute -left-3 top-1/2 -translate-y-[calc(50%-26px)] bg-white border-2 border-cyan-700 rounded-full w-6 h-6"></div>
            </div>
            <div className="pl-8 text-left">
              <h3 className="text-2xl font-semibold">{experience.role}</h3>
              <p className='mb-6 text-xl'>
                {experience.company.title}
                {experience.company.description && ' - '}
                {experience.company.description && (
                  <span className='text-sm'>{experience.company.description}</span>
                )}
              </p>
              <ul>
                {experience.jobs.map((job: IJob, index: number) => (
                  <li key={index} className='mb-2 list-disc'>
                    {job.description}
                    {job.technology && <span className='block text-sm text-gray-500'>{job.technology}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
