'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

import Toast from './toast'

export default function ContactForm()  {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [toast, setToast] = useState({ message: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    setIsSubmitting(true)

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    const response: Response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      setToast({ message: 'Your message has been sent successfully', type: 'success' })
      clearFormData()
    } else {
      setToast({ message: 'Failed to send message. Please try later', type: 'error' })
    }

    setIsSubmitting(false)
  }

  const clearFormData = (): void => setFormData({ name: '', email: '', message: '' })
  const clearToast = (): void => setToast({ message: '', type: '' })

  const isFormValid = formData.name && formData.email && formData.message

  const labelClassName = "block text-left text-gray-700 text-sm font-bold mb-2"
  const inputClassName = "shadow appearance-none border rounded w-full mb-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  const requiredStarClassName = "text-cyan-700"

  return (
    <>
      {toast.message && <Toast message={toast.message} type={toast.type} clearToastCallback={clearToast} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={labelClassName}>
          Name <span className={requiredStarClassName}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClassName}
          required
        />
        <label htmlFor="email" className={labelClassName}>
          Email <span className={requiredStarClassName}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClassName}
          required
        />
        <label htmlFor="message" className={labelClassName}>
          Message <span className={requiredStarClassName}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={inputClassName}
          rows={12}
          maxLength={1000}
          required
        ></textarea>
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-30"
        >
          Send Message
        </button>
      </form>
    </>
  )
}