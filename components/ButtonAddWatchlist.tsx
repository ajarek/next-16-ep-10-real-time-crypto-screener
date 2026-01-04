"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { addToWatchlist, getWatchlist } from "@/lib/action"
import { redirect, useRouter } from "next/navigation"
import { Watchlist } from "@/lib/models"

interface ButtonAddWatchlistProps {
  isAuthenticated: boolean
  username: string
  coinId: string
}

const ButtonAddWatchlist = ({
  isAuthenticated,
  username,
  coinId,
}: ButtonAddWatchlistProps) => {
  const router = useRouter()

  const handleAddToWatchlist = async () => {
    const watchlist = await getWatchlist(username)
    if (!isAuthenticated) return
    if (watchlist?.some((i: Watchlist) => i.coinsId === coinId)) {
      toast("This coin is already in your watchlist")
      router.push("/all-coins")
      return
    }
    await addToWatchlist({ username, coinsId: coinId })
    toast.success("Coin added to watchlist")
    redirect("/dashboard")
  }

  return (
    <Button
      disabled={!isAuthenticated}
      className={`${
        !isAuthenticated ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleAddToWatchlist}
    >
      Add to watchlist
    </Button>
  )
}

export default ButtonAddWatchlist
