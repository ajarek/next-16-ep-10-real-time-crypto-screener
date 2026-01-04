import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2 max-sm:gap-1'>
      <Image
        src='/images/logo.png'
        alt='coins Logo'
        width={40}
        height={40}
        loading='eager'
      />
      <h1 className='text-2xl max-sm:text-lg font-bold'>CoinPulse</h1>
    </Link>
  )
}

export default Logo
