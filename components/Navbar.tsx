import Logo from "./Logo"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"

const Navbar = () => {
  return (
    <div className='h-16 flex items-center justify-between px-8 border-b-2 border-zinc-400'>
      <Logo />

      <div className='flex items-center gap-8'>
        <Link href='/' className='text-xl'>
          Home
        </Link>
        <Link href='/all-coins' className='text-xl'>
          All Coins
        </Link>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
