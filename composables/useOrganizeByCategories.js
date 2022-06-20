const categoriesChosenByUser = ['Romance', 'Drama', 'Action', 'Comedy', 'Family']

export const useOrganizeByCategories = (showsPayload) => {
  const sortedByRatingShows = showsPayload.sort((a, b) => b.rating.average - a.rating.average)
  const categorizedShows = {}

  //* API does not provide genre categories, so I did it myself
  //* taking each show and puting it in a non full + available category
  //* based on the array of it's genres
  for (const show of sortedByRatingShows) {
    for (const categoryFetchedShow of show.genres) {
      for (const chosenCategory of categoriesChosenByUser) {
        if (categoryFetchedShow === chosenCategory) {
          if (categorizedShows[chosenCategory]) {
            categorizedShows[chosenCategory].push(show)
          } else {
            categorizedShows[chosenCategory] = [show]
          }
        }
      }
    }
  }

  //* limit entries to 10 elements
  for (const [key, value] of Object.entries(categorizedShows)) {
    categorizedShows[key] = value.splice(0, 10)
  }
  return categorizedShows
}
