import { createSSRApp } from "vue";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";
import routes from "./router";
import App from "./App.vue";

const isClient = typeof window !== "undefined";

const router = createRouter({
  history: isClient ? createWebHistory() : createMemoryHistory(),
  routes,
});

export const createApp = () => {
  const app = createSSRApp(App);
  app.use(router);
  return { app, router };
};
