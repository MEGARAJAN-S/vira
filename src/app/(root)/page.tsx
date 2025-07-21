import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { ScrollProgress } from '@/components/modules/ScrollProgress'

const page = () => {
  return (
    <div>
      <div>
        <Header />
        <ScrollProgress />
        <Hero />
      </div>
    </div>
  )
}

export default page