'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface IProject {
  title: string
  description: string
  stack: string
  image: string
  padding: string
}

export default function Projects() {
  const translations = useTranslations('Projects')

  const projects: IProject[] = [
    {
      title: translations('projects.episciences.title'),
      description: translations('projects.episciences.description'),
      stack: translations('projects.episciences.stack'),
      image: '/assets/images/projects/episciences.png',
      padding: 'px-4',
    },
    {
      title: translations('projects.cocacolarefillable.title'),
      description: translations('projects.cocacolarefillable.description'),
      stack: translations('projects.cocacolarefillable.stack'),
      image: '/assets/images/projects/coca-cola-refillable.png',
      padding: 'px-4',
    },
    {
      title: translations('projects.theones.title'),
      description: translations('projects.theones.description'),
      stack: translations('projects.theones.stack'),
      image: '/assets/images/projects/the-ones.png',
      padding: 'py-4',
    },
    {
      title: translations('projects.luckysit.title'),
      description: translations('projects.luckysit.description'),
      stack: translations('projects.luckysit.stack'),
      image: '/assets/images/projects/luckysit.png',
      padding: 'py-4',
    },
    {
      title: translations('projects.otello.title'),
      description: translations('projects.otello.description'),
      stack: translations('projects.otello.stack'),
      image: '/assets/images/projects/otello.png',
      padding: 'px-4',
    },
    {
      title: translations('projects.eatsalad.title'),
      description: translations('projects.eatsalad.description'),
      stack: translations('projects.eatsalad.stack'),
      image: '/assets/images/projects/eat-salad.png',
      padding: 'px-4',
    },
    {
      title: translations('projects.chronicoach.title'),
      description: translations('projects.chronicoach.description'),
      stack: translations('projects.chronicoach.stack'),
      image: '/assets/images/projects/chronicoach.png',
      padding: 'py-4',
    },
    {
      title: translations('projects.exval.title'),
      description: translations('projects.exval.description'),
      stack: translations('projects.exval.stack'),
      image: '/assets/images/projects/exval.png',
      padding: 'px-4',
    },
    {
      title: translations('projects.tradelock.title'),
      description: translations('projects.tradelock.description'),
      stack: translations('projects.tradelock.stack'),
      image: '/assets/images/projects/tradelock.png',
      padding: 'px-4',
    },
    {
      title: translations('projects.hardwareclub.title'),
      description: translations('projects.hardwareclub.description'),
      stack: translations('projects.hardwareclub.stack'),
      image: '/assets/images/projects/hardware-club.png',
      padding: 'px-4',
    },
    {
      title: translations('projects.treasurehunters.title'),
      description: translations('projects.treasurehunters.description'),
      stack: translations('projects.treasurehunters.stack'),
      image: '/assets/images/projects/treasure-hunters.png',
      padding: 'py-4',
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">{translations('title')}</h1>
      <p className="mb-12 text-lg text-center text-gray-600">{translations('subtitle')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project: IProject, index: number) => (
          <div key={index} className="group relative w-96 h-64 md:w-128 md:h-96 overflow-hidden bg-gray-100">
            <div className="inset-0 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                className={`object-contain transition duration-300 ease-in-out group-hover:opacity-0 ${project.padding}`}
                fill
              />
            </div>
            <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <div className="text-center">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-2">{project.description}</p>
                <p className="mt-2 text-sm text-gray-500">{project.stack}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
