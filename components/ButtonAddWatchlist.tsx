"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { addToWatchlist } from "@/lib/action"
import { redirect } from "next/navigation"

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

  const handleAddToWatchlist = async () => {
    if (!isAuthenticated) return
    await addToWatchlist({ username, coinsId: coinId })
    toast.success("Coin added to watchlist")
    redirect('/dashboard')
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
