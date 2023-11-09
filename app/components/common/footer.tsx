import Link from 'next/link'
import Image from 'next/image'

import githubIcon from '../../../public/assets/icons/github.svg'
import linkedinIcon from '../../../public/assets/icons/linkedin.svg'

export default function Footer() {
  const linkClassName = "text-gray-900 hover:text-cyan-700 dark:text-white dark:hover:text-cyan-500"

  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto py-6 px-4 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4 mb-2">
          <Link href='https://github.com/sturquier' className={linkClassName} target="_blank" rel="noopener noreferrer">
            <span className="sr-only">GitHub</span>
            <Image src={githubIcon} alt="GitHub" width={20} height={20} />
          </Link>
          <Link href='https://linkedin.com/in/simon-turquier-92aa23148' className={linkClassName} target="_blank" rel="noopener noreferrer">
            <span className="sr-only">LinkedIn</span>
            <Image src={linkedinIcon} alt="LinkedIn" width={30} height={20} />
          </Link>
        </div>
        <p className="text-gray-800 dark:text-gray-400 text-sm text-center">© Simon Turquier 2023</p>
      </div>
    </footer>
  )
}
