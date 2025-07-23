import { Particles } from '@/components/modules/Particles'
import { SparklesText } from '@/components/modules/Sparkle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-svh relative z-10'>
            <div className="absolute overflow-hidden w-full z-[-1]">
                <Particles />
            </div>

            <div className='pt-16'>
                <div className='flex items-center justify-center pt-20 responsive-heading'>
                    <span>VIRA</span>
                <div className='flex flex-col items-center justify-center pt-20'>
                    <span>
                        <SparklesText className='responsive-heading'>VIRA</SparklesText>
                    </span>

                    <span className='responsive-text mt-4 text-secondary'>
                        Your thoughts deserve to be heard — let VIRA listen
                    </span>

                    <span className='responsive-para mt-6 text-primary'>
                        Speak or type your thoughts. VIRA listens, understands, and supports your emotional journey.
                    </span>

                    <span className='responsive-para text-primary'>
                        Whether you're journaling, venting, or reflecting — VIRA is here to help you feel better.
                    </span>

                    <div className="mt-20 flex gap-5">
                        <Link href="/signup">
                            <Button variant="default" asChild>
                                <span>Start Talking</span>
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button variant="outline" asChild>
                                <span>View Features</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
