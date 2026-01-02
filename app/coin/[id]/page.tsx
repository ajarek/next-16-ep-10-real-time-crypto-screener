import coins from "@/data/coins.json"
import Image from "next/image"

const Coin = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const coin = coins.find((coin) => coin.id === id)
  return (
    <div className='min-h-[calc(100vh-64px)] w-full grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-2 border-4 rounded-lg px-16 py-8 place-items-center'>
      <div className="flex items-center gap-2">
        <Image
          src={coin?.image || ""}
          alt={coin?.name || ""}
          width={90}
          height={90}
        />
        <div>
        <h2 className='text-2xl font-bold'>{coin?.name}</h2>
        <p className="font-semibold text-xl">${coin?.current_price}</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
      <p>Market Cap: <span className="font-semibold text-xl">{coin?.market_cap}</span></p>
      <p>Market Cap Rank: <span className="font-semibold text-xl">{coin?.market_cap_rank}</span></p>
      <p>Fully Diluted Valuation: <span className="font-semibold text-xl">{coin?.fully_diluted_valuation}</span></p>
      <p>Total Volume: <span className="font-semibold text-xl">{coin?.total_volume}</span></p>
      <p>High 24h: <span className="font-semibold text-xl">{coin?.high_24h}</span></p>
      <p>Low 24h: <span className="font-semibold text-xl">{coin?.low_24h}</span></p>
      <p>Price Change 24h: <span className="font-semibold text-xl">{coin?.price_change_24h}</span></p>
      <p>Price Change Percentage 24h: <span className="font-semibold text-xl">{coin?.price_change_percentage_24h}</span></p>
      <p>Market Cap Change 24h: <span className="font-semibold text-xl">{coin?.market_cap_change_24h}</span></p>
      <p>Market Cap Change Percentage 24h: <span className="font-semibold text-xl">{coin?.market_cap_change_percentage_24h}</span></p>
      <p>Circulating Supply: <span className="font-semibold text-xl">{coin?.circulating_supply}</span></p>
      </div>
      <div className="flex flex-col items-start gap-2">
      <p>Total Supply: <span className="font-semibold text-xl">{coin?.total_supply}</span></p>
      <p>Max Supply: <span className="font-semibold text-xl">{coin?.max_supply}</span></p>
      <p>ATH: <span className="font-semibold text-xl">{coin?.ath}</span></p>
      <p>ATH Change Percentage: <span className="font-semibold text-xl">{coin?.ath_change_percentage}</span></p>
      <p>ATH Date: <span className="font-semibold text-xl">{coin?.ath_date}</span></p>
      <p>ATL: <span className="font-semibold text-xl">{coin?.atl}</span></p>
      <p>ATL Change Percentage: <span className="font-semibold text-xl">{coin?.atl_change_percentage}</span></p>
      <p>ATL Date: <span className="font-semibold text-xl">{coin?.atl_date}</span></p>
      <p>ROI: <span className="font-semibold text-xl">{coin?.roi?.times || ""}</span></p>
      <p>Last Updated: <span className="font-semibold text-xl">{coin?.last_updated}</span></p>
      <p>Price Change Percentage 1h in Currency: <span className="font-semibold text-xl">{coin?.price_change_percentage_1h_in_currency}</span></p>
      </div>
    </div>
  )
}

export default Coin
