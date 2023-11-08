'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import menuIcon from '../../public/assets/icons/menu.svg'

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event: TouchEvent) => {
            const target = event.target as Element;
     
            if (isMenuOpen && !target.closest('#navbar-menu')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick as EventListener);

        return () => {
            document.removeEventListener('click', handleOutsideClick as EventListener);
        };
    }, [isMenuOpen]);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string): boolean => path === pathname;

    const getLinkClassName = (path: string): string => {
        const baseClasses = "block py-2 pl-3 pr-4 rounded md:p-0";
    
        const activeClasses = isActive(path)
            ? "text-white bg-cyan-700 md:bg-transparent md:text-cyan-700"
            : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700";

        const inactiveClasses = "dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

        return `${baseClasses} ${activeClasses} ${inactiveClasses}`;
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ST</Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-menu"
                    aria-expanded={isMenuOpen}
                >
                    <Image src={menuIcon} alt="Open menu" width={20} height={20} />
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-menu">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className={getLinkClassName('/')}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={getLinkClassName('/about')}>About</Link>
                        </li>
                        <li>
                            <Link href="/projects" className={getLinkClassName('/projects')}>Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={getLinkClassName('/contact')}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}