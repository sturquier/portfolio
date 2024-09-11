import Link from 'next/link'

import githubIcon from '../../../../public/assets/icons/github.svg'
import linkedinIcon from '../../../../public/assets/icons/linkedin.svg'
import './footer.scss'

export default function Footer() {
  const linkClassName = "footer-link transform transition duration-300 hover:scale-110"

  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 mt-8">
      <div className="max-w-screen-xl mx-auto py-6 px-4 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4 mb-2">
          <Link href={process.env.GITHUB_URL ?? ''} className={linkClassName} target="_blank" rel="noopener noreferrer">
            <span className="sr-only">GitHub</span>
            <div className="footer-icon footer-icon-github" style={{ WebkitMaskImage: `url(${githubIcon.src})`, maskImage: `url(${githubIcon.src})` }}></div>
          </Link>
          <Link href={process.env.LINKEDIN_URL ?? ''} className={linkClassName} target="_blank" rel="noopener noreferrer">
            <span className="sr-only">LinkedIn</span>
            <div className="footer-icon footer-icon-linkedin" style={{ WebkitMaskImage: `url(${linkedinIcon.src})`, maskImage: `url(${linkedinIcon.src})` }}></div>
          </Link>
        </div>
        <p className="text-gray-800 dark:text-gray-400 text-sm text-center">© Simon Turquier 2024</p>
      </div>
    </footer>
  )
}
