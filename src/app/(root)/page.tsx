import React from 'react'
import Header from './components/Header'
import { ScrollProgress } from '@/components/modules/ScrollProgress'
import Hero from './components/Hero'
import Features from './components/Features'

const page = () => {
  return (
    <div>
      <div>
        <Header />
        <ScrollProgress />
        <Hero />
        <Features />
      </div>
    </div>
  )
}

export default page