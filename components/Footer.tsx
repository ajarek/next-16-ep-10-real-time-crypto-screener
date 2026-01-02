import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className='w-full flex py-6 items-center justify-between border-t mt-auto'>
      <div className='flex flex-col gap-1'>
        <h3 className='font-semibold text-sm'>Crypto Screener</h3>
        <p className='text-xs text-muted-foreground'>
          &copy; {new Date().getFullYear()} Real-time market data.
        </p>
      </div>

      <div className='flex items-center gap-2'>
        <Button variant='ghost' size='icon' asChild>
          <Link
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github className='h-4 w-4' />
            <span className='sr-only'>GitHub</span>
          </Link>
        </Button>
        <Button variant='ghost' size='icon' asChild>
          <Link
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Twitter className='h-4 w-4' />
            <span className='sr-only'>Twitter</span>
          </Link>
        </Button>
        <Button variant='ghost' size='icon' asChild>
          <Link
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Linkedin className='h-4 w-4' />
            <span className='sr-only'>LinkedIn</span>
          </Link>
        </Button>
      </div>
    </footer>
  )
}
