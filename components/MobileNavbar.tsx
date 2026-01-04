"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"

interface MobileNavbarProps {
  isAuthenticated: boolean
}

const MobileNavbar = ({ isAuthenticated }: MobileNavbarProps) => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <div className='sm:hidden'>
      <Button
        variant='ghost'
        size='icon'
        onClick={toggle}
        className='relative z-50'
      >
        {open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
      </Button>

      {open && (
        <div className='fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in-95 duration-200'>
          <nav className='flex flex-col items-center gap-8 text-center'>
            {isAuthenticated && (
              <Link
                href='/dashboard'
                onClick={toggle}
                className='text-3xl font-bold hover:text-primary transition-colors'
              >
                Dashboard
              </Link>
            )}
            <Link
              href='/'
              onClick={toggle}
              className='text-3xl font-bold hover:text-primary transition-colors'
            >
              Home
            </Link>
            <Link
              href='/all-coins'
              onClick={toggle}
              className='text-3xl font-bold hover:text-primary transition-colors'
            >
              All Coins
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNavbar
