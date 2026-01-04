import Logo from "./Logo"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { LogIn, UserRoundPen } from "lucide-react"
import { Button } from "./ui/button"
import { auth } from "@clerk/nextjs/server"
import MobileNavbar from "./MobileNavbar"

const Navbar = async () => {
  const { isAuthenticated } = await auth()

  return (
    <div className='h-16 flex items-center justify-between px-8 max-sm:px-4 border-b-2 border-zinc-400'>
      <Logo />

      <div className='flex items-center gap-8'>
        <div className='flex items-center gap-8 max-sm:hidden'>
          {isAuthenticated && (
            <Link href='/dashboard' className='text-xl'>
              Dashboard
            </Link>
          )}
          <Link href='/' className='text-xl'>
            Home
          </Link>
          <Link href='/all-coins' className='text-xl'>
            All Coins
          </Link>
        </div>
        <MobileNavbar isAuthenticated={!!isAuthenticated} />
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <Button size='icon' className='cursor-pointer'>
              <LogIn className='w-5 h-5 ' />
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size='icon' className='cursor-pointer'>
              <UserRoundPen className='w-5 h-5 ' />
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
