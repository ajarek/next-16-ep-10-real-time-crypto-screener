'use server'

import connectToDb from './connectToDb'
import { Watchlist} from './models'
import { revalidatePath } from 'next/cache'

import { redirect } from 'next/navigation'

export const addToWatchlist = async (formData: Watchlist) => {
  const { username, coinsId } = formData
  try {
    connectToDb()
    const newWatchlist = new Watchlist({
      username,
      coinsId,
    })
    await newWatchlist.save()
    console.log('saved' + newWatchlist)
    revalidatePath('/dashboard')
    redirect('/dashboard')
  } catch (err) {
    console.log(err)
  }
}

export const getWatchlist = async (username: string) => {
  try {
    connectToDb()
    const watchlist = await Watchlist.find({ username })
    return watchlist
  } catch (err) {
    console.log(err)
  }
}






// export const deleteUser = async (formData: FormData) => {
//   const id = formData.get('_id')

//   try {
//     await connectToDb()
//     await User.findOneAndDelete({ _id: id })
//     revalidatePath('/dashboard')
//     console.log({ message: `Deleted user ${id}` })
//     return { message: `Deleted user ${id}` }
//   } catch (err) {
//     return { message: 'Failed to delete user' + err }
//   }
// }

// export const updateUser = async (formData: FormData) => {
//   const _id = formData.get('_id')
//   const username = formData.get('username')
//   const email = formData.get('email')
//   const img = formData.get('img')
//   const isAdmin = formData.get('isAdmin')

//   try {
//     await connectToDb()
//     await User.findOneAndUpdate(
//       { _id: _id },
//       {
//         username: username,
//         email: email,
//         img: img,
//         isAdmin: isAdmin === 'true' ? Boolean(true) : Boolean(false),
//       }
//     )
//     revalidatePath(`/dashboard`)

//     return { message: `Updated user ${_id}` }
//   } catch (err) {
//     return { message: 'Failed to update to db' + err }
//   } finally {
//     redirect('/')
//   }
// }
