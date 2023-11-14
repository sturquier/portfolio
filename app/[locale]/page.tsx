'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Home() {
  const translations = useTranslations('Home')

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
      <p className="text-2xl mb-8">
        {`${translations('title')} `}
        <span className='emoji-shake'>👋</span>
        {` ${translations('title2')}`}
      </p>
      <div className="avatar-wrapper">
        <div className="avatar-container">
          <Image src="/assets/images/avatar.png" alt="Avatar" width={128} height={128} />
        </div>
      </div>
      <h1 className="text-4xl font-bold my-4">{translations('title3')}</h1>
      <p className="text-xl text-slate-700 font-medium">
        {translations('subtitle')}
        <span className="line-through">{translations('subtitle2')}</span>
        {` ${translations('subtitle3')}`}
      </p>
    </main>
  )
}
