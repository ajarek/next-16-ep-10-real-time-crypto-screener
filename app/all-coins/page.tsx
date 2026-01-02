"use client"

import React from "react"
import coins from "@/data/coins.json"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AllCoinsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)
  const ITEMS_PER_PAGE = 12

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredCoins.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedCoins = filteredCoins.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className='flex flex-col items-center gap-4 mt-4 px-8'>
      <h1 className='text-2xl font-bold'>AllCoinsPage</h1>
      <div className='w-1/2 relative flex items-center gap-4 '>
        <Input
          type='search'
          placeholder='Search'
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery || ""}
          className='px-10'
        />
        <Search className='absolute left-2 top-1/2 -translate-y-1/2' />
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 '>
        {paginatedCoins.map((coin) => (
          <Link
            href={`/coin/${coin.id}`}
            key={coin.id}
            className='flex items-center justify-start gap-2 border-4 p-4 rounded-lg bg-secondary'
          >
            <Image src={coin.image} alt={coin.name} width={64} height={64} />
            <h2>{coin.name}</h2>
            <p>{coin.symbol}</p>
            <p>${coin.current_price.toFixed(2)}</p>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className='w-full flex justify-center items-center gap-2 mt-8 pb-8'>
          <Button
            variant='outline'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          <div className='flex items-center gap-2'>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              
              let pageNum = currentPage
              if (totalPages <= 5) {
                pageNum = i + 1
              } else if (currentPage <= 3) {
                pageNum = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i
              } else {
                pageNum = currentPage - 2 + i
              }

              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  onClick={() => handlePageChange(pageNum)}
                  className='w-10 h-10 p-0'
                >
                  {pageNum}
                </Button>
              )
            })}
          </div>

          <Button
            variant='outline'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

export default AllCoinsPage
