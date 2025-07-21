import { Particles } from '@/components/modules/Particles'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-svh'>
            <div className="absolute overflow-hidden w-full">
                <Particles />
            </div>
            <div className='pt-16'>
                <div className='flex items-center justify-center pt-20 text-7xl'>
                    <span>VIRA</span>
                </div>
            </div>
        </div>
    )
}

export default Hero