import mongoose from "mongoose"

export type Watchlist = {
  username: string
  coinsId: string
}

const watchlistSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: false, min: 3, max: 20 },
    coinsId: { type: String, required: true },
  },
  { timestamps: true }
)

export const Watchlist =
  mongoose.models?.Watchlist || mongoose.model("Watchlist", watchlistSchema)
