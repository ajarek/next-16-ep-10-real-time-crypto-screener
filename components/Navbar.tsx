import Logo from './Logo'
import { Input } from './ui/input'
import Link from 'next/link'
import { Search } from 'lucide-react'
import {ModeToggle} from '@/components/ModeToggle'

const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between px-8 border-b-2 border-zinc-400">
      <Logo/>
      <div className="flex items-center justify-between gap-4 w-1/2 ">
      <div className="relative flex items-center gap-4 w-1/2">
        <Input type="text" placeholder="Search" className=''/>
       <Search className="absolute right-2 top-1/2 -translate-y-1/2"/>
        </div>
        <div className="flex items-center gap-8">
        <Link href="/" className='text-xl'>Home</Link>
        <Link href="/all-coins" className='text-xl'>All Coins</Link>
        <ModeToggle/>
        </div>
      </div>
    </div>
  )
}

export default Navbar