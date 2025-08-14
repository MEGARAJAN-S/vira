import React from 'react'
import Header from './components/Header'
import { ScrollProgress } from '@/components/modules/ScrollProgress'
import Hero from './components/Hero'
import Features from './components/Features'
import Use from './components/Use'
import Testimonials from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <div>
        <Header />
        <ScrollProgress />
        <Hero />
        <Features />
        <Use />
        <CallToAction />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default page