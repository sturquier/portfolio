import type { Metadata } from 'next'
import Image from 'next/image'
 
export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  const projects: { title: string, description: string, image: string, padding: string }[] = [
    {
      title: 'The Ones',
      description: 'Application mobile destinée à la vente de produits de luxe',
      image: '/assets/images/the-ones.png',
      padding: 'py-4',
    },
    {
      title: 'Otello',
      description: "Plateforme de mise en relation entre organismes administratifs et hôtels afin de placer des personnes isolées en rupture d'hébergement",
      image: '/assets/images/otello.png',
      padding: 'px-4',
    },
    {
      title: 'Eat Salad',
      description: 'Plateforme permettant de composer, commander et se faire livrer des salades sur mesure',
      image: '/assets/images/eat-salad.png',
      padding: 'px-4',
    },
    {
      title: 'Exval',
      description: "Plateforme de recherche et analyse de transactions immobilières",
      image: '/assets/images/exval.png',
      padding: 'px-4',
    },
    {
      title: 'Tradelock',
      description: "Plateforme permettant aux sociétés d'assurer leurs factures",
      image: '/assets/images/tradelock.png',
      padding: 'px-4',
    },
    {
      title: 'Treasure Hunters',
      description: 'Jeu mobile permettant de partir à la chasse aux trésors en AR via des quêtes et des objets',
      image: '/assets/images/treasure-hunters.png',
      padding: 'py-4',
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="group relative w-96 h-64 md:w-128 md:h-96 overflow-hidden bg-gray-100">
            <div className="inset-0 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="contain"
                className={`transition duration-300 ease-in-out group-hover:opacity-0 ${project.padding}`}
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
