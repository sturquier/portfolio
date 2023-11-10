'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

export default function ContactForm()  {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  }

  const labelClassName = "block text-left text-gray-700 text-sm font-bold mb-2"
  const inputClassName = "shadow appearance-none border rounded w-full mb-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  const requiredStarClassName = "text-cyan-700"

  return (
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
        required
      ></textarea>
      <button type="submit" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
    </form>
  )
}