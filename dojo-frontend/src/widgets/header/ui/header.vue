<template>
  <header>
    <nav class="navbar bg-base-100 shadow-base-200 drop-shadow-lg">
      <div class="navbar-start"></div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">Dojo</a>
      </div>
      <div class="navbar-end">
        <label class="swap swap-flip text-xl px-2">
          <input type="checkbox" />

          <button
            @click="
              currentLang === 'ru' ? (currentLang = 'en') : (currentLang = 'ru')
            "
            class="swap-on"
          >
            {{ currentLang }}
          </button>
          <button
            @click="
              currentLang === 'ru' ? (currentLang = 'en') : (currentLang = 'ru')
            "
            class="swap-off"
          >
            {{ currentLang }}
          </button>
        </label>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentLang = ref("en");
</script>
