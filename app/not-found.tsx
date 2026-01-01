import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className='max-w-5xl mx-auto px-5 py-20 min-h-screen flex items-center justify-center'>
      <div className='w-full flex flex-col items-center text-center gap-6'>
        <div className='relative w-[285px] h-[160px] rounded-lg bg-muted flex items-center justify-center shadow-md'>
          <Image
            src='/images/not-found-coin.jpg'
            alt='No cookies - humorous image'
            width={1680}
            height={980}
            className='object-cover rounded-md'
          />
        </div>

        <h1 className='text-4xl font-serif text-primary'>
          Page not found!
        </h1>

        <p className='max-w-xl text-muted-foreground'>
          It looks like this page is not available or the address is incorrect.
          Try returning to the home page or verifying the address
          URL.
        </p>

        <div className='flex gap-3'>
          <Link href='/'>
            <Button>Return to the home page</Button>
          </Link>
        </div>

        <p className='text-xl text-muted-foreground'>Error code: 404</p>
      </div>
    </main>
  )
}
