<template>
  <div class="shows-line">
    <h2 v-if="categoryName" class="text-warm-gray-300 text-4xl mt-4">{{ categoryName }}</h2>
    <article class="flex flex-nowrap overflow-x-auto gap-2 mt-3 cursor-grab">
      <div
        v-for="show in shows"
        :key="show.id"
        class="flex relative w-72 h-48 mb-1 bg-cover rounded-md cursor-pointer"
        style="flex: 0 0 auto"
        :style="`background-image: url(${show.image})`"
        @click="$router.push({ name: 'shows-id', params: { id: show.id } })"
      >
        <span class="w-full flex items-end self-end h-36 bg-gradient-to-t from-black w-full rounded-md">
          <span class="font-bold pb-3 pl-3">{{ show.name }}</span>
        </span>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  categoryName: String,
  shows: Array,
})
</script>

<script>
export default {
  name: 'CategoryFeed',
}
</script>

<style scoped>
.shows-line {
  scrollbar-gutter: stable;
}
article {
  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
}
article::-webkit-scrollbar {
  @apply h-4;
}
article::-webkit-scrollbar-track {
  background-color: #333;
}
article::-webkit-scrollbar-thumb {
  border: 4px solid transparent;
  border-radius: 100px;
  @apply bg-violet-700;
  background-clip: content-box;
}
</style>
