<template>
  <header class="container">
    <nav class="navbar bg-base-100">
      <div class="navbar-start">
        <button class="btn btn-neutral" @click="toggleMenu()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div>
          <div
            class="absolute left-0 top-0 z-50 h-screen transition-all duration-300"
            :class="{
              '-translate-x-full': hiddenMenu,
              'translate-x-0': !hiddenMenu,
              'opacity-0': hiddenMenu,
              'opacity-100': !hiddenMenu,
              'pointer-events-none': hiddenMenu,
              'pointer-events-auto': !hiddenMenu,
            }"
          >
            <ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
              <li>
                <RouterLink
                  to="/trainer-kana"
                  class="flex w-full flex-col py-3 hover:text-primary"
                  @click="toggleMenu()"
                >
                  <h6 class="text-2xl leading-none">Hiragana and Katakana</h6>
                  <small class="text-base leading-none"
                    >ひらがなとカタカナ</small
                  >
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/trainer-typing"
                  class="flex w-full flex-col py-3 hover:text-primary"
                  @click="toggleMenu()"
                >
                  <h6 class="text-2xl leading-none">Typing Trainer</h6>
                  <small class="text-base leading-none">
                    タイピングトレーナー
                  </small>
                </RouterLink>
              </li>
            </ul>
          </div>
          <div
            class="absolute bottom-0 left-0 right-0 top-0 z-40 h-screen w-screen bg-base-200/50"
            :class="{
              '-translate-x-full': hiddenMenu,
              'translate-x-0': !hiddenMenu,
              'opacity-0': hiddenMenu,
              'opacity-100': !hiddenMenu,
              'pointer-events-none': hiddenMenu,
              'pointer-events-auto': !hiddenMenu,
            }"
            @click="toggleMenu()"
          ></div>
        </div>
      </div>

      <div class="navbar-center">
        <RouterLink to="/" class="btn btn-ghost text-3xl font-black">
          Dojo
        </RouterLink>
      </div>
      <div class="navbar-end flex gap-3">
        <label class="swap swap-rotate">
          <input type="checkbox" class="theme-controller" value="light" />

          <svg
            class="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <svg
            class="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const hiddenMenu = ref<boolean>(true);

const toggleMenu = (): void => {
  hiddenMenu.value = !hiddenMenu.value;
};
</script>
