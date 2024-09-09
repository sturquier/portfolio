'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface IProject {
  title: string
  description: string
  image: string
  padding: string
}

export default function Projects() {
  const translations = useTranslations('Projects')

  const projects: IProject[] = [
    {
      title: 'Episciences',
      description: translations('descriptions.episciences'),
      image: '/assets/images/projects/episciences.png',
      padding: 'px-4',
    },
    {
      title: 'Coca-Cola Refillable',
      description: translations('descriptions.cocacolarefillable'),
      image: '/assets/images/projects/coca-cola-refillable.png',
      padding: 'px-4',
    },
    {
      title: 'The Ones',
      description: translations('descriptions.theones'),
      image: '/assets/images/projects/the-ones.png',
      padding: 'py-4',
    },
    {
      title: 'Luckysit',
      description: translations('descriptions.luckysit'),
      image: '/assets/images/projects/luckysit.png',
      padding: 'py-4',
    },
    {
      title: 'Otello',
      description: translations('descriptions.otello'),
      image: '/assets/images/projects/otello.png',
      padding: 'px-4',
    },
    {
      title: 'Eat Salad',
      description: translations('descriptions.eatsalad'),
      image: '/assets/images/projects/eat-salad.png',
      padding: 'px-4',
    },
    {
      title: 'Chronicoach',
      description: translations('descriptions.chronicoach'),
      image: '/assets/images/projects/chronicoach.png',
      padding: 'py-4',
    },
    {
      title: 'Exval',
      description: translations('descriptions.exval'),
      image: '/assets/images/projects/exval.png',
      padding: 'px-4',
    },
    {
      title: 'Tradelock',
      description: translations('descriptions.tradelock'),
      image: '/assets/images/projects/tradelock.png',
      padding: 'px-4',
    },
    {
      title: 'Hardware Club',
      description: translations('descriptions.hardwareclub'),
      image: '/assets/images/projects/hardware-club.png',
      padding: 'px-4',
    },
    {
      title: 'Treasure Hunters',
      description: translations('descriptions.treasurehunters'),
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
