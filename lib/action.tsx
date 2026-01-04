"use server"

import connectToDb from "./connectToDb"
import { Watchlist } from "./models"
import { revalidatePath } from "next/cache"

import { redirect } from "next/navigation"

export const addToWatchlist = async (formData: Watchlist) => {
  const { username, coinsId } = formData
  try {
    await connectToDb()
    const newWatchlist = new Watchlist({
      username,
      coinsId,
    })
    await newWatchlist.save()
    console.log("saved" + newWatchlist)
    revalidatePath("/dashboard")
    redirect("/dashboard")
  } catch (err) {
    console.log(err)
  }
}

export const getWatchlist = async (username: string) => {
  try {
    await connectToDb()
    const watchlist = await Watchlist.find({ username })
    return JSON.parse(JSON.stringify(watchlist))
  } catch (err) {
    console.log(err)
  }
}

export const removeFromWatchlist = async (coinsId: string) => {
  try {
    await connectToDb()
    await Watchlist.deleteOne({ coinsId })
    revalidatePath("/dashboard")
    redirect("/dashboard")
  } catch (err) {
    console.log(err)
  }
}
