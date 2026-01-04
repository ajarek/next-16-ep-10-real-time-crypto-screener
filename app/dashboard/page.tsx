import { getWatchlist } from "@/lib/action"
import { Watchlist } from "@/lib/models"
import { currentUser } from "@clerk/nextjs/server"
import coins from "@/data/coins.json"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import Image from "next/image"
import { Trash2, TrendingDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import ButtonDeleteWatchlist from "@/components/ButtonDeleteWatchlist"
const Dashboard = async () => {
  const user = await currentUser()
  const watchlist = await getWatchlist(user?.id || "")
  const watchedCoins = watchlist?.map((item: Watchlist) => item.coinsId)
  const coinsData = coins.filter((coin) => watchedCoins?.includes(coin.id))
  return (
    <div className='flex flex-col gap-4 px-8 py-6'>
      <h1 className='text-2xl font-bold'>Dashboard - Coins Watchlist</h1>
       <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="max-sm:hidden">Change 24h</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coinsData?.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell>
                    <Link href={`/coin/${coin.id}`}>
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={32}
                      height={32}
                    />
                    </Link>
                  </TableCell>
                  <TableCell>{coin.name}</TableCell>
                  <TableCell className='flex items-center gap-2 max-sm:hidden'>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                    {coin.price_change_percentage_24h < 0 ? (
                      <TrendingDown className='text-red-500' />
                    ) : (
                      <TrendingUp className='text-green-500' />
                    )}
                  </TableCell>
                  <TableCell>{coin.current_price}</TableCell>
                  <TableCell>
                    <ButtonDeleteWatchlist coinId={coin.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      
    </div>
  )
}

export default Dashboard
