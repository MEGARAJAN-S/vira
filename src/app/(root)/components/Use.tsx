import LightRays from '@/components/modules/Light'
import React from 'react'

const Use = () => {
    return (
        <section id="#how-it-works" className='relative h-svh w-full overflow-hidden'>
            <div className='absolute h-full w-full'>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="primary"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>
        </section>
    )
}

export default Use