<template>
  <div
    :class="`flex border justify-between border-neutral p-4 rounded-lg items-center col-span-${size}`"
  >
    <div>
      <h3 class="text-2xl">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <NuxtLink :to="href">
      <button class="btn btn-neutral">Go</button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  href: String,
  size: String,
  title: String,
  description: String,
});
</script>
