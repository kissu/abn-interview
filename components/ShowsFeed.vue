<template>
  <div class="mt-4">
    <div v-for="(shows, categoryName) in props.allShows" :key="categoryName">
      <category-feed :category-name="categoryName" :shows="shows" />
    </div>
    <br />
  </div>
</template>

<script setup>
const props = defineProps({
  allShows: Object,
})
</script>

<script>
export default {
  name: 'ShowsFeed',
}
</script>
