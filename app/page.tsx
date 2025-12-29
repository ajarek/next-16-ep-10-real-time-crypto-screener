import Image from "next/image"
import coins from "../data/coins.json"
export default function Home() {
  console.log(coins.length)
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black p-4">
     <h1 className="text-2xl font-bold">Coins</h1>
     <div className="flex flex-col gap-4">
      {coins
      .slice(0, 10)
      .map((coin) => (
        <div key={coin.id} className="flex items-center gap-2">
          <Image src={coin.image} alt={coin.name} width={32} height={32} />
          <h2>{coin.name}</h2>
          <p>{coin.symbol}</p>
          <p>{coin.current_price}</p>
        </div>
      ))}
     </div>
    </div>
  );
}
