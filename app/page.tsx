import Image from "next/image"
import coins from "../data/coins.json"
import { ChartLineInteractive } from "@/components/Chart"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TrendingDown, TrendingUp } from "lucide-react"



export default function Home() {
  console.log(coins.length)
  return (
    <div className='w-full flex flex-col min-h-screen items-start justify-start p-4 '>
      <section className='w-full grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] gap-4 '>
        <div className='w-full flex flex-col items-start gap-2 border-4 rounded-lg px-16 py-8 bg-secondary'>
          <div className='flex items-center gap-2 '>
          <Image
            src={coins[0].image}
            alt={coins[0].name}
            width={60}
            height={60}
          />
          <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-bold'>Bitcoin</h2>
            <p>$50,000</p>
          </div>
          </div>
          <ChartLineInteractive/>
        </div>
        <div className='w-full  flex flex-col items-start gap-8 border-4 rounded-lg p-4 bg-secondary'>
          <h1 className='text-2xl font-semibold'>Trending Coins</h1>
         <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Change 24h</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coins.slice(0, 10).map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={32}
                    height={32}
                  />
                </TableCell>
                <TableCell>{coin.name}</TableCell>
                <TableCell className='flex items-center gap-2'>{coin.price_change_percentage_24h.toFixed(2)}%{coin.price_change_percentage_24h<0?<TrendingDown className="text-red-500" />:<TrendingUp className="text-green-500" />}</TableCell>
                <TableCell>{coin.current_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
         </Table>
        </div>
      </section>
      <h2 className='text-2xl font-bold'>Coins</h2>
      <div className='flex flex-col gap-4'>
        {coins.slice(0, 10).map((coin) => (
          <div key={coin.id} className='flex items-center gap-2'>
            <Image src={coin.image} alt={coin.name} width={32} height={32} />
            <h2>{coin.name}</h2>
            <p>{coin.symbol}</p>
            <p>{coin.current_price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
