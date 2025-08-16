import { ShinyText } from '@/components/modules/ShinyText'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="flex items-center justify-center gap-2 font-bold text-lg text-foreground pt-2">
                    <Link href="/" className="flex items-center">
                        <Home className="w-5 h-5 self-center" />
                        <span><ShinyText baseColor="rgb(0, 0, 0)"
                            shineColor="rgb(20, 22, 27)"
                            direction="top-to-bottom"
                            speed={10} size="2xl" weight="bold">
                            VIRA
                        </ShinyText></span>
                    </Link>
                </div>
            <div className='bg-background min-h-svh p-6 md:p-10 flex flex-col items-center justify-center'>
                <div className='w-full max-w-sm md:max-w-3xl'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout