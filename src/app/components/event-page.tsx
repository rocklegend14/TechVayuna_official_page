'use client'

import React, { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"


interface EventPageProps {
  title: string
  description: string
  images: string[]
}

export default function EventPage({ title, description, images }: EventPageProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-violet-500 rounded-2xl">
      <h1 className="text-4xl font-bold text-white text-center mb-12">{title}</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/3 space-y-4">
          {images.map((image, index) => (
            <div key={index} className="h-full w-full">
              <img
                src={image}
                alt={`Event image ${index + 1}`}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-2/3 text-white">
          <p className="text-lg mb-12 leading-relaxed">
            {description}
          </p>
          <div className="h-px bg-orange-500 w-24 mb-8" />
          <h2 className="text-2xl mb-8">date time speakers</h2>
        
        </div>
      </div>
    </div>
  )
}

