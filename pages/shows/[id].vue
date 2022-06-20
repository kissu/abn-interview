<template>
  <article>
    <button class="flex items-center text-2xl mt-2" @click="$router.push({ name: 'shows' })">
      <icon-backspace class="ml-2 text-light-300 mr-2" />Go back
    </button>

    <img
      :src="showDetails.image.medium"
      class="mt-8 rounded-md max-h-96 lg:h-96 w-auto mx-auto"
      alt="TV show cover"
    />

    <div class="flex flex-col items-center text-left">
      <h2 class="font-bold text-2xl text-light-300 mt-2">{{ showDetails.name }}</h2>
      <p class="mt-2">
        <span class="font-bold mr-1">Genres:</span> {{ showDetails.genres.join(', ') || '?' }}
      </p>
      <p class="flex items-center">
        <span class="font-bold mr-2">Rating:</span> {{ showDetails.rating.average || '?' }} / 10<icon-star
          class="ml-2 text-yellow-400 animate-pulse"
        />
      </p>
      <a
        class="fancy-button"
        :href="`https://www.imdb.com/title/${showDetails.externals.imdb}/`"
        target="_blank"
      >
        Check on IMDb
      </a>
    </div>
  </article>
</template>

<script setup>
import iconBackspace from '~icons/mdi/keyboard-backspace'
import iconStar from '~icons/mdi/star'

const route = useRoute()
const { data: showDetails } = await useFetch(`https://api.tvmaze.com/shows/${route.params.id}`)
</script>

<script>
export default {
  name: 'ShowsId',
}
</script>

<style scoped>
.fancy-button {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #ff512f 0%, #f09819 51%, #ff512f 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.fancy-button:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.fancy-button:active {
  transform: scale(0.95);
}
</style>
