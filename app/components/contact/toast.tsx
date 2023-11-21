import { useEffect } from 'react'
import Image from 'next/image'

export default function Toast({ message, type, clearToastCallback }: { message: string, type: string, clearToastCallback: Function }) {
  const duration = 5000

  useEffect(() => {
    const timer = setTimeout(() => {
      clearToastCallback()
    }, duration)
    
    return () => clearTimeout(timer)
  }, [message, clearToastCallback])
  
  if (!message) return null

  const bgClassName = type === 'success' ? 'bg-green-600' : 'bg-red-500'

  return (
    <div className={`${bgClassName} fixed top-20 right-5 z-50 px-4 py-2 rounded-md text-white flex items-center justify-between`}>
      {message}
      <button onClick={(): void => clearToastCallback()} className="ml-4">
        <Image src="/assets/icons/close.svg" alt="Close" width={24} height={24} />
      </button>
    </div>
  )
}
  