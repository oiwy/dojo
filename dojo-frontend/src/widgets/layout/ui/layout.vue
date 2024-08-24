<template>
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import { Header } from "@/widgets";
</script>
