<template>
  <div :class="`border border-neutral p-4 rounded-lg col-span-${size}`">
    <RouterLink :to="props.href">
      <h3 class="text-2xl">{{ props.title }}</h3>
      <p>{{ props.description }}</p>
    </RouterLink>
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
