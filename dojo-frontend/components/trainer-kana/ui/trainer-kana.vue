<template>
  <h1 class="text-3xl font-bold">
    {{ kana === "hiragana" ? "Hiragana" : "Katakana" }}
  </h1>

  <div v-if="mode === 'select'" class="flex flex-col gap-2">
    <p>
      Select a column to start learning.
      <kbd class="kbd kbd-sm">Click</kbd> on the kanji to learn it.
    </p>
    <div
      class="grid overflow-x-scroll"
      style="grid-template-columns: repeat(16, max-content)"
    >
      <div
        class="flex flex-col items-center justify-between border border-neutral text-center"
        v-for="(column, i) in kana === 'hiragana' ? hiragana : katakana"
        :key="i"
        @click="selectColumn(i)"
        :class="selectedColumn?.includes(i) ? 'bg-primary' : ''"
      >
        <div v-for="symbol in kana === 'hiragana' ? hiragana[i] : katakana[i]">
          <div class="cursor-pointer p-1.5">
            <div
              class="text-3xl font-bold leading-none"
              :class="selectedColumn?.includes(i) ? 'text-primary-content' : ''"
            >
              {{ symbol.kanji }}
            </div>
            <div
              class="text-muted"
              :class="selectedColumn?.includes(i) ? 'text-primary-content' : ''"
            >
              {{ symbol.romanji }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-2">
      <button
        class="btn btn-primary"
        :class="selectedColumn.length === 0 ? 'btn-disabled' : ''"
        @click="startLearning"
        :disabled="selectedColumn.length === 0"
      >
        Learn
      </button>
      <button class="btn btn-neutral" @click="toggleKana()">
        Change to {{ kana === "hiragana" ? "Katakana" : "Hiragana" }}
      </button>
      <button
        class="btn btn-neutral"
        @click="selectedColumn = hiragana.map((_: any, i: any) => i)"
      >
        Select all
      </button>
      <button class="btn btn-neutral" @click="selectedColumn = []">
        Unselect all
      </button>
    </div>
    <div class="flex gap-2">
      <label for="sortType" class="label">Sort Type:</label>
      <select id="sortType" v-model="sortType" class="select select-bordered">
        <option value="shuffledRepeats">Shuffled (With Repeats)</option>
        <option value="shuffled">Shuffled (No Repeats)</option>
        <option value="ordered">Ordered</option>
      </select>
    </div>
  </div>

  <div v-else-if="mode === 'learn'" class="flex flex-col items-center gap-4">
    <div class="w-96">
      <p>
        The answer is scored automatically without pressing the enter key. The
        <kbd class="kbd kbd-sm">spacebar</kbd> prompts the answer.
      </p>

      <div class="flex flex-col items-center justify-center pb-6 pt-10">
        <h2
          v-if="currentSymbol"
          class="text-6xl font-bold text-primary transition-all duration-200"
          :class="{
            'scale-125': newSymbol,
            'animate-shake text-error': errSymbol,
          }"
          :key="currentSymbol.kanji"
        >
          {{ currentSymbol.kanji }}
        </h2>
        <span
          class="text-muted text-lg"
          :class="showHint ? 'opacity-100' : 'opacity-0'"
        >
          {{ currentSymbol.romanji }}
        </span>
      </div>

      <input
        v-model="userInput"
        ref="inputField"
        type="text"
        class="input input-bordered my-4 w-full"
        placeholder="Enter the romanji"
        @keydown.space.prevent="toggleHint"
      />

      <div class="grid w-full grid-cols-3 gap-4">
        <button class="btn btn-neutral" @click="mode = 'select'">
          Settings
        </button>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { hiragana, katakana } from "../model";

const mode = ref<"select" | "learn">("select");
const kana = ref<"hiragana" | "katakana">("hiragana");
const sortType = ref<"shuffledRepeats" | "shuffled" | "ordered">(
  "shuffledRepeats",
);

const toggleKana = () => {
  kana.value = kana.value === "hiragana" ? "katakana" : "hiragana";
};

const selectedColumn = ref<number[]>([]);
const selectColumn = (i: number) => {
  if (selectedColumn.value.includes(i)) {
    selectedColumn.value = selectedColumn.value.filter((item) => item !== i);
  } else {
    selectedColumn.value.push(i);
  }
};

const userInput = ref<string>("");
const inputField = ref<HTMLInputElement | null>(null);
const showHint = ref<boolean>(false);

const focusInput = () => {
  if (inputField.value) {
    inputField.value.focus();
  }
};

const toggleHint = () => {
  showHint.value = !showHint.value;
  focusInput();
};

const generateSymbolsToLearn = () => {
  const selectedSymbols = selectedColumn.value.flatMap((col) =>
    kana.value === "hiragana" ? hiragana[col] : katakana[col],
  );

  switch (sortType.value) {
    case "shuffled":
      return shuffleArray([...selectedSymbols]);
    case "shuffledRepeats":
      return generateShuffledWithRepeats([...selectedSymbols]);
    case "ordered":
    default:
      return selectedSymbols;
  }
};

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateShuffledWithRepeats = (array: any[]) => {
  const shuffledArray = shuffleArray([...array]);
  const result = [];

  for (let i = 0; i < shuffledArray.length; i++) {
    result.push(shuffledArray[i]);

    if (i >= 2 && i % (2 + Math.floor(Math.random() * 5)) === 0) {
      result.push(
        shuffledArray[Math.floor(Math.random() * shuffledArray.length)],
      );
    }
  }

  return result;
};

const symbolsToLearn = ref(generateSymbolsToLearn());
const currentIndex = ref<number>(0);

const currentSymbol = computed(() => symbolsToLearn.value[currentIndex.value]);

const startLearning = () => {
  symbolsToLearn.value = generateSymbolsToLearn();
  currentIndex.value = 0;
  mode.value = "learn";
  nextTick(() => {
    focusInput();
  });
};

const newSymbol = ref<boolean>(false);
const errSymbol = ref<boolean>(false);

const nextSymbol = () => {
  userInput.value = "";
  showHint.value = false;
  newSymbol.value = true;

  if (currentIndex.value < symbolsToLearn.value.length - 1) {
    currentIndex.value++;
  } else {
    symbolsToLearn.value = generateSymbolsToLearn();
    currentIndex.value = 0;
  }

  focusInput();
  setTimeout(() => {
    newSymbol.value = false;
  }, 200);
};

const countErr = ref<number>(0);

watch(userInput, (newValue) => {
  if (
    newValue !== "" &&
    newValue.toLowerCase() !== currentSymbol.value.romanji.toLowerCase() &&
    newValue.length >= currentSymbol.value.romanji.length
  ) {
    errSymbol.value = true;

    setTimeout(() => {
      errSymbol.value = false;
    }, 200);

    countErr.value++;

    if (countErr.value >= 3) {
      toggleHint();
    }
  }

  if (newValue.toLowerCase() === currentSymbol.value.romanji.toLowerCase()) {
    countErr.value = 0;
    nextSymbol();
  }
});
</script>
