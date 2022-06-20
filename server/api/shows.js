import { useMazeShowList } from '~/composables/useMazeShowList.js'
import { useOrganizeByCategories } from '~/composables/useOrganizeByCategories.js'
import { useGetImageForEveryShow } from '~/composables/useGetImageForEveryShow.js'

export default defineEventHandler(async () => {
  //* Fetching and massage'ing TV shows 🚀
  const fetchedShows = await useMazeShowList()
  const cleanShows = useOrganizeByCategories(fetchedShows)
  return await useGetImageForEveryShow(cleanShows)
})
