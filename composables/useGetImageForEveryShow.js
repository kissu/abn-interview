export const useGetImageForEveryShow = async (cleanShows) => {
  const finalShowObject = {}
  for (const [showCategoryName, showsWithMissingThumbnail] of Object.entries(cleanShows)) {
    finalShowObject[showCategoryName] = await Promise.all(
      showsWithMissingThumbnail.map(async (show) => {
        try {
          const previousEpisode = await $fetch(show._links.previousepisode.href)
          return {
            ...show,
            image:
              previousEpisode.image?.original ||
              'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=30', // fallback because the API does not have a photo for every TV show
          }
        } catch (error) {
          console.error('error during image fetching', error)
        }
      }),
    )
  }
  return finalShowObject
}
