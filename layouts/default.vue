<template>
  <main>
    <header
      class="flex h-16 justify-between items-center bg-gradient-to-bl from-purple-600 to-purple-900 mb-4 flex"
    >
      <span
        class="inline text-3xl ml-4 lg:ml-16 text-gray-50 cursor-pointer"
        @click="$router.push({ name: 'shows' })"
      >
        ABNflix
      </span>
      <input
        v-model="inputQuery"
        type="text"
        class="inline mr-6 lg:mr-12 w-42"
        placeholder="Search TV show"
        @keyup.enter="moveToDetails"
      />
    </header>
    <section class="px-4 lg:px-24 overflow-y-hidden">
      <slot />
    </section>
  </main>
</template>

<script setup>
const inputQuery = ref('')

const moveToDetails = async () => {
  const sentQuery = inputQuery.value
  inputQuery.value = ''
  const result = await $fetch(`https://api.tvmaze.com/singlesearch/shows?q=${sentQuery}`)
  navigateTo({ name: 'shows-id', params: { id: result.id } })
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
input[type='text'] {
  @apply pl-2 box-border text-purple-800;
}
</style>
