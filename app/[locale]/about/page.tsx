'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface IExperience {
  year: string
  experience: ICertification | IProfession
}

interface ICertification {
  title: string;
  description: string;
  link: string;
}

interface IProfession {
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

  const isProfessionalExperience = (experience: ICertification | IProfession): experience is IProfession => 'company' in experience && 'role' in experience

  const experiences: IExperience[] = [
    {
      year: '2024',
      experience: {
        title: translations('certifications.psm1.title'),
        description: translations('certifications.psm1.description'),
        link: 'https://www.scrum.org/user/1439045'
      },
    },
    {
      year: '2022 - 2023',
      experience: {
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
      }
    },
    {
      year: '2019 - 2022',
      experience: {
        company: {
          title: 'TKT Thinking Technology'
        },
        role: translations('roles.fullstack'),
        jobs: [
          {
            description: translations('companies.tkt.jobs.development'),
            technology: 'Symfony 4,5,6, React.JS, Nest.JS'
          },
        ]
      }
    },
    {
      year: '2018 - 2019',
      experience: {
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
      }
    },
    {
      year: '2016 - 2018',
      experience: {
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
      }
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-12">{translations('title')}</h1>
      <a href="/assets/documents/cv.pdf" download className="flex items-center justify-center self-end mb-4 mr-20 bg-cyan-700 text-white font-bold py-2 px-4 rounded hover:bg-cyan-800 transition duration-300">
        {translations('cv')}
        <span className="ml-2 flex items-center justify-center">
          <Image
            src="/assets/icons/download.svg"
            alt="Download"
            width={24}
            height={24}
          />
        </span>
      </a>
      <div className="flex flex-col items-start relative">
        <div className="absolute left-28 top-0 bottom-0 w-0.5 bg-cyan-700"></div>
        {experiences.map((exp: IExperience, index: number) => (
          <div key={index} className="flex items-start mb-10">
            <div className="w-24 mr-4 text-cyan-700 text-right">{exp.year}</div>
            <div className="relative flex items-center">
              <div className="absolute -left-3 top-1/2 -translate-y-[calc(50%-26px)] bg-white border-2 border-cyan-700 rounded-full w-6 h-6"></div>
            </div>
            {isProfessionalExperience(exp.experience) ? (
              <div className="pl-8 text-left">
                <h3 className="text-2xl font-semibold">{exp.experience.role}</h3>
                <p className='mb-6 text-xl'>
                  {exp.experience.company.title}
                  {exp.experience.company.description && ' - '}
                  {exp.experience.company.description && (
                    <span className='text-sm'>{exp.experience.company.description}</span>
                  )}
                </p>
                <ul>
                  {exp.experience.jobs.map((job: IJob, index: number) => (
                    <li key={index} className='mb-2 list-disc'>
                      {job.description}
                      {job.technology && <span className='block text-sm text-gray-500'>{job.technology}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="pl-8 text-left">
                <h3 className="text-2xl font-semibold">{exp.experience.title}</h3>
                <p className='mb-6 text-xl'>
                  {exp.experience.description}
                  <span className='block text-sm text-gray-500 hover:text-cyan-800'>
                    {' ( '}
                    <a href={exp.experience.link} target="_blank">{translations('certifications.seeMore')}</a>
                    {' ) '}
                  </span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
