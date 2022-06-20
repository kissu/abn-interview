<template>
  <div>
    <shows-feed :all-shows="allShows" />
  </div>
</template>

<script setup>
definePageMeta({
  keepalive: true,
})
let allShows = reactive([])

const { data: cleanShows } = await useFetch('/api/shows')
allShows = cleanShows.value
</script>

<script>
export default {
  name: 'ShowsIndex',
}
</script>
