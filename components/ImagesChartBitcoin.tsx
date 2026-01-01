"use client"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const ImagesChartBitcoin = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <div className='aspect-1420/820 w-full animate-pulse rounded-lg bg-muted/20' />
    )
  }

  return (
    <div>
      <Image
        src={
          theme === "dark"
            ? "/images/chart-bitcoin-dark.png"
            : "/images/chart-bitcoin-light.png"
        }
        alt={"Bitcoin Chart"}
        width={1420}
        height={820}
        priority
        className="rounded-lg"  
      />
    </div>
  )
}

export default ImagesChartBitcoin
