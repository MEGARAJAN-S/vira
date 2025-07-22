import { Button } from '@/components/ui/button'
import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='fixed z-50 w-full bg-muted backdrop-blur-full border-b'>
      <div className='max-w-7xl mx-auto px-6 flex h-16 items-center justify-between'>
        <Link href="/" className="flex items-center gap-2">
          <House className="w-5 h-5" />
          <span className="font-bold">VIRA</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button variant="default">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
