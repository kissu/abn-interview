import { pick } from 'lodash-es'
const interestingFields = ['id', 'name', 'genres', 'rating', '_links']

export const useMazeShowList = async () => {
  const shows = await $fetch('https://api.tvmaze.com/shows')
  return shows.map((show) => pick(show, interestingFields))
}
