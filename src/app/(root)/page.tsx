import React from 'react'
import Header from './components/Header'
import { ScrollProgress } from '@/components/modules/ScrollProgress'
import Hero from './components/Hero'
import Features from './components/Features'
import Use from './components/Use'
import Testimonials from './components/Testimonial'

const page = () => {
  return (
    <div>
      <div>
        <Header />
        <ScrollProgress />
        <Hero />
        <Features />
        <Use />
        <Testimonials />
      </div>
    </div>
  )
}

export default page