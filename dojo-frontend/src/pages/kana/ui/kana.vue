<template>
  <section>
    <div class="container py-8 flex flex-col items-center justify-center gap-4">
      <div class="flex flex-col gap-2">
        <KanaTrainer />
        <!-- <p class="w-1/2">
          Kana is a writing system used in the Japanese language, which consists
          of two syllabaries: Katakana and Hiragana. Katakana is used to write
          foreign words, loanwords, emphasis, and onomatopoeic words, while
          Hiragana is used to write native Japanese words and grammatical
          elements. Studying Kana is an essential part of learning Japanese, as
          it provides the foundation for reading and writing Japanese.
        </p> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { KanaTrainer } from "@/features";
</script>
